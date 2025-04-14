import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteApplication } from '../../../../../redux/actions/applicationActions';

const useDeleteApplicationDataModal = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteApplication(id, setLoading, setSuccess));
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

export default useDeleteApplicationDataModal;
