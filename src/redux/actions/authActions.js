import axios from 'axios';
import { toast } from 'react-toastify';
import { setToken, setUser } from '../reducers/authReducers';

export const login =
  (navigate, email, password, setLoading) => async (dispatch) => {
    setLoading(true);
    let data = JSON.stringify({
      email,
      password,
    });

    let config = {
      method: 'post',
      url: `${import.meta.env.VITE_BACKEND_API}/auth/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };

    try {
      const response = await axios.request(config);

      const { data } = response.data;
      const { token, user } = data;

      dispatch(setToken(token));
      dispatch(setUser(user));

      navigate('/admin/data-pendaftar');

      toast.success('Login berhasil');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }

    setLoading(false);
  };

export const getProfile =
  (navigate, successRedirect, errorRedirect) => async (dispatch, getState) => {
    const { token } = getState().auth;

    if (!token) {
      dispatch(logout());
      if (navigate) {
        if (errorRedirect) {
          navigate(errorRedirect);
        }
      }
      return;
    }

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/auth/profile`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.request(config);
      const { data } = response.data;

      if (
        data &&
        data.phoneNumber &&
        data.phoneNumber.includes('NOT_PROVIDED')
      ) {
        data.phoneNumber = '-';
      }

      dispatch(setUser(data));

      if (navigate) {
        if (successRedirect) {
          navigate(successRedirect);
        }
      }
    } catch (error) {
      console.error(error);
      dispatch(logout());
      if (navigate) {
        if (errorRedirect) {
          navigate(errorRedirect);
        }
      }
    }
  };

export const logout = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
};
