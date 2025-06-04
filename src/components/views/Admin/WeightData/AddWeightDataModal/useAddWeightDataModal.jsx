import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addWeight } from '../../../../../redux/actions/weightActions';

const addWeightSchema = yup.object().shape({
  name: yup.string().required('Nama bobot wajib diisi'),
  IPK_weight: yup
    .number()
    .required('Bobot IPK wajib diisi')
    .min(0, 'Bobot IPK tidak boleh kurang dari 0')
    .max(100, 'Bobot IPK tidak boleh lebih dari 100'),
  intern_category_weight: yup
    .number()
    .required('Bobot tipe magang wajib diisi')
    .min(0, 'Bobot tipe magang tidak boleh kurang dari 0')
    .max(100, 'Bobot tipe magang tidak boleh lebih dari 100'),
  college_major_weight: yup
    .number()
    .required('Bobot jurusan wajib diisi')
    .min(0, 'Bobot jurusan tidak boleh kurang dari 0')
    .max(100, 'Bobot jurusan tidak boleh lebih dari 100'),
  KRS_remaining_weight: yup
    .number()
    .required('Bobot sisa SKS wajib diisi')
    .min(0, 'Bobot sisa SKS tidak boleh kurang dari 0')
    .max(100, 'Bobot sisa SKS tidak boleh lebih dari 100'),
  CV_score_weight: yup
    .number()
    .required('Bobot skor CV wajib diisi')
    .min(0, 'Bobot skor CV tidak boleh kurang dari 0')
    .max(100, 'Bobot skor CV tidak boleh lebih dari 100'),
  motivation_letter_score_weight: yup
    .number()
    .required('Bobot skor motivation letter wajib diisi')
    .min(0, 'Bobot motivation letter tidak boleh kurang dari 0')
    .max(100, 'Bobot motivation letter tidak boleh lebih dari 100'),
});

const useAddWeightDataModal = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addWeightSchema),
  });

  const resetSucces = useCallback(() => {
    setSuccess(false);
  }, [setSuccess]);

  const handleAddWeight = useCallback(
    (data) => {
      dispatch(addWeight(data, setLoading, setSuccess));
    },
    [dispatch]
  );

  const handleCloseModal = (onClose) => {
    reset();
    onClose();
  };

  return {
    control,
    errors,
    loading,
    success,
    reset,
    resetSucces,
    handleAddWeight,
    handleCloseModal,
    handleSubmit,
  };
};

export default useAddWeightDataModal;
