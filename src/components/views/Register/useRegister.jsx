import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addApplication } from '../../../redux/actions/applicationActions';

const registerSchema = yup.object().shape({
  full_name: yup.string().required('Nama lengkap wajib diisi'),
  university: yup.string().required('Asal Universitas wajib diisi'),
  email: yup.string().email('Email tidak valid').required('Email wajib diisi'),
  phone: yup
    .string()
    .required('No. Telepon wajib diisi')
    .min(10, 'No. Telepon tidak boleh kurang dari 10 angka')
    .max(15, 'No. Telepon tidak boleh lebih dari 15 angka'),
  intern_category: yup
    .string()
    .oneOf(['Magang KRS', 'Magang Mandiri'], 'Tipe magang tidak valid')
    .required('Tipe magang wajib diisi'),
  KRS_remaining: yup
    .number('Sisa SKS harus berupa angka')
    .required('Sisa SKS wajib diisi')
    .min(1, 'Sisa SKS tidak boleh kurang dari 0'),
  semester: yup
    .number('Semester harus berupa angka')
    .min(1, 'Minimal Semester 4')
    .required('Semester wajib diisi'),
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
  IPK: yup
    .number()
    .required('IPK wajib diisi')
    .min(1, 'IPK tidak boleh kurang dari 0'),
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
    .required('Link pemberkasan wajib diisi'),
});

const useRegister = () => {
  const [loading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = useCallback(
    (data) => {
      dispatch(addApplication(data, setIsLoading, setSuccess));
    },
    [dispatch]
  );

  return {
    control,
    errors,
    loading,
    success,
    reset,
    handleSubmit,
    handleRegister,
  };
};

export default useRegister;
