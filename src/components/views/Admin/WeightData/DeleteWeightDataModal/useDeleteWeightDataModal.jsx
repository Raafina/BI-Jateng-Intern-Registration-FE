import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWeight } from '../../../../../redux/actions/weightActions';

const useDeleteWeightDataModal = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteWeight(id, setLoading, setSuccess));
    },
    [dispatch]
  );

  const resetSuccess = useCallback(() => {
    setSuccess(false);
  }, [setSuccess]);

  return {
    loading,
    success,
    handleDelete,
    resetSuccess,
  };
};

export default useDeleteWeightDataModal;
