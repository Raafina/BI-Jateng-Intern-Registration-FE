import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  getWeight,
  updateWeight,
} from '../../../../../redux/actions/weightActions';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const updateWeightSchema = yup.object().shape({
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
    .required('Bobot sisa KRS wajib diisi')
    .min(0, 'Bobot sisa KRS tidak boleh kurang dari 0')
    .max(100, 'Bobot sisa KRS tidak boleh lebih dari 100'),
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

const useUpdateWeightDataModal = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { weight } = useSelector((state) => state.weight);

  // get data by id
  const getWeightById = useCallback(
    (id) => {
      dispatch(getWeight(id, setLoading));
    },
    [dispatch]
  );

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateWeightSchema),
  });

  const handleUpdate = (data) => {
    dispatch(updateWeight(weight.id, data, setLoading, setSuccess));
  };

  const resetSuccess = useCallback(() => {
    setSuccess(false);
  }, [setSuccess]);

  return {
    control,
    errors,
    loading,
    weight,
    success,
    reset,
    resetSuccess,
    handleSubmit,
    handleUpdate,
    getWeightById,
  };
};

export default useUpdateWeightDataModal;
