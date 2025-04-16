import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  getWeight,
  updateWeight,
} from '../../../../../redux/actions/weightActions';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const updateWeightSchema = yup
  .object()
  .shape({
    name: yup.string().required('Nama bobot wajib diisi'),
    IPK_weight: yup
      .number()
      .required('Bobot IPK wajib diisi')
      .min(0, 'Bobot IPK tidak boleh kurang dari 0')
      .max(1, 'Bobot IPK tidak boleh lebih dari 1'),
    intern_category_weight: yup
      .number()
      .required('Bobot tipe magang wajib diisi')
      .min(0, 'Bobot tipe magang tidak boleh kurang dari 0')
      .max(1, 'Bobot tipe magang tidak boleh lebih dari 1'),
    college_major_weight: yup
      .number()
      .required('Bobot jurusan wajib diisi')
      .min(0, 'Bobot jurusan tidak boleh kurang dari 0')
      .max(1, 'Bobot jurusan tidak boleh lebih dari 1'),
    CV_score_weight: yup
      .number()
      .required('Bobot skor CV wajib diisi')
      .min(0, 'Bobot skor CV tidak boleh kurang dari 0')
      .max(1, 'Bobot skor CV tidak boleh lebih dari 1'),
    motivation_letter_score_weight: yup
      .number()
      .required('Bobot skor motivation letter wajib diisi')
      .min(0, 'Bobot motivation letter tidak boleh kurang dari 0')
      .max(1, 'Bobot motivation letter tidak boleh lebih dari 1'),
  })
  .test(
    'total-weight',
    'Total bobot tidak boleh lebih dari 1',
    function (values) {
      const {
        IPK_weight = 0,
        intern_category_weight = 0,
        college_major_weight = 0,
        CV_score_weight = 0,
        motivation_letter_score_weight = 0,
      } = values;

      const total =
        IPK_weight +
        intern_category_weight +
        college_major_weight +
        CV_score_weight +
        motivation_letter_score_weight;
      if (total < 1) {
        return this.createError({
          path: 'totalWeight',
          message: 'Total bobot tidak boleh kurang dari 1',
        });
      }
      if (total > 1) {
        return this.createError({
          path: 'totalWeight',
          message: 'Total bobot tidak boleh lebih dari 1',
        });
      }

      return true;
    }
  );

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
