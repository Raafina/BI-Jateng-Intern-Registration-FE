import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteApplication } from '../../../../../redux/actions/applicationActions';

const useDeleteDataModal = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteApplication(id, setLoading, setSuccess));
    },
    [dispatch]
  );

  return {
    loading,
    success,
    handleDelete,
  };
};

export default useDeleteDataModal;
