import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { calculateSAW } from '../../../../../redux/actions/DSSResultActions';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const proccessApplicationSchema = yup.object().shape({
  start_month: yup.string().required('Rencana mulai wajib diisi'),
  weight_id: yup.string().required('Bobot wajib diisi'),
  division_quota: yup.string().required('Kuota divisi harus diisi'),
});

const useProccessSAWDataModal = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const WeightsData = useSelector((state) => state.weight.weights);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(proccessApplicationSchema),
  });

  const handleCalculateSAW = useCallback(
    (data) => {
      dispatch(calculateSAW(data, setLoading, setSuccess));
    },
    [dispatch]
  );

  return {
    control,
    errors,
    loading,
    success,
    WeightsData,
    handleSubmit,
    handleCalculateSAW,
  };
};

export default useProccessSAWDataModal;
