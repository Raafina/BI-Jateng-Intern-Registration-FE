import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../redux/actions/authActions';
import * as yup from 'yup';
const loginSchema = yup.object().shape({
  email: yup.string().required('Email wajib diisi'),
  password: yup.string().required('Password wajib diisi'),
});

const useLogin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data) => {
    dispatch(login(navigate, data.email, data.password, setLoading));
  };

  return {
    toggleVisibility,
    handleSubmit,
    handleLogin,
    loading,
    errors,
    isVisible,
    control,
  };
};

export default useLogin;
