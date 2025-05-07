import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProfile } from '../../../redux/actions/authActions';

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(navigate, null, '/admin/login'));
  }, [dispatch, navigate]);

  return children;
};

export default Protected;
