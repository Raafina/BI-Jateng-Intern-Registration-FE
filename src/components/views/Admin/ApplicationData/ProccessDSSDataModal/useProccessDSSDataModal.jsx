import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { calculateDSS } from '../../../../../redux/actions/DSSResultActions';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const proccessApplicationSchema = yup.object().shape({
  year: yup.string().required('Tahun mulai wajib diisi'),
  month: yup.string().required('Bulan mulai wajib diisi'),
  weight_id: yup.string().required('Bobot wajib diisi'),
});

const useProccessDSSDataModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const WeightsData = useSelector((state) => state.weight.weights);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(proccessApplicationSchema),
  });

  const handleCalculateDSS = useCallback(
    (data) => {
      dispatch(
        calculateDSS(
          {
            ...data,
            division_quota: {
              ['Moneter']: data.Moneter,
              ['IT']: data.IT,
              ['Sistem Pembayaran']: data.Sistem_Pembayaran,
              ['Pengelolaan Uang Rupiah']: data.Pengelolaan_Uang_Rupiah,
              ['Humas']: data.Humas,
              ['Internal']: data.Internal,
              ['Makroprudensial']: data.Makroprudensial,
            },
          },
          setLoading,
          navigate
        )
      );
    },
    [dispatch, navigate]
  );

  return {
    control,
    errors,
    loading,
    WeightsData,
    reset,
    handleSubmit,
    handleCalculateDSS,
  };
};

export default useProccessDSSDataModal;
