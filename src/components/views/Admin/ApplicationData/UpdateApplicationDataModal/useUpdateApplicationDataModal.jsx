import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  getApplication,
  updateApplication,
} from '../../../../../redux/actions/applicationActions';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const updateApplicationSchema = yup.object().shape({
  full_name: yup.string().required('Nama lengkap wajib diisi'),
  university: yup.string().required('Asal Universitas wajib diisi'),
  email: yup.string().email('Email tidak valid').required('Email wajib diisi'),
  phone: yup.string().required('No. HP wajib diisi'),
  intern_category: yup
    .string()
    .oneOf(['Magang KRS', 'Magang Mandiri'], 'Tipe magang tidak valid')
    .required('Tipe magang wajib diisi'),
  semester: yup.number().min(1, 'Minimal Semester 4').required(),
  KRS_remaining: yup
    .number()
    .min(1, 'Sisa KRS tidak boleh kurang dari 0')
    .required(),
  division_request: yup
    .string()
    .oneOf(
      [
        'Moneter',
        'Makroprudensial',
        'Sistem Pembayaran',
        'Pengelolaan Uang Rupiah',
        'Humas',
        'Internal',
      ],
      'Bidang Peminatan tidak valid'
    )
    .required('Bidang Peminatan wajib diisi'),
  IPK: yup.number().required('IPK wajib diisi'),
  college_major: yup
    .string()
    .oneOf(
      [
        'Ekonomi',
        'Akuntansi',
        'Manajemen',
        'IT',
        'Hukum',
        'Statistika',
        'Ilmu Sosial',
      ],
      'Jurusan tidak valid'
    )
    .required('Jurusan wajib diisi'),
  start_month: yup.date().required('Tanggal rencana mulai wajib diisi'),
  end_month: yup
    .date()
    .min(yup.ref('start_month'), 'Tanggal selesai harus setelah tanggal mulai')
    .test(
      'max-6-months',
      'Tanggal selesai tidak boleh lebih dari 6 bulan dari tanggal mulai',
      function (value) {
        if (!this.parent.start_month || !value) return true;
        const start = new Date(this.parent.start_month);
        const maxEnd = new Date(start);
        maxEnd.setMonth(start.getMonth() + 6);
        return value <= maxEnd;
      }
    )
    .required('Tanggal rencana selesai wajib diisi'),
  google_drive_link: yup
    .string()
    .url('Harus berupa link valid')
    .required('Link Google Drive wajib diisi'),
  CV_score: yup
    .number()
    .min(0, 'Nilai motivation letter tidak boleh kurang dari 0')
    .max(100, 'Nilai motivation letter tidak boleh lebih dari 100')
    .nullable(),
  motivation_letter_score: yup
    .number()
    .min(0, 'Nilai motivation letter tidak boleh kurang dari 0')
    .max(100, 'Nilai motivation letter tidak boleh lebih dari 100')
    .nullable(),
});

const useUpdateApplicationDataModal = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { application } = useSelector((state) => state.application);

  // get data by id
  const getApplicationById = useCallback(
    (id) => {
      dispatch(getApplication(id, setLoading));
    },
    [dispatch]
  );

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateApplicationSchema),
  });

  const handleUpdate = (data) => {
    dispatch(updateApplication(application.id, data, setLoading, setSuccess));
  };

  const resetSuccess = useCallback(() => {
    setSuccess(false);
  }, [setSuccess]);

  return {
    control,
    errors,
    loading,
    application,
    success,
    reset,
    resetSuccess,
    handleSubmit,
    handleUpdate,
    getApplicationById,
  };
};

export default useUpdateApplicationDataModal;
