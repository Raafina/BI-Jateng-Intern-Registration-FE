import { useDispatch } from 'react-redux';
import { logout } from '../../../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const useDashboardSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/admin/login');
  };

  return { handleLogout };
};

export default useDashboardSidebar;
