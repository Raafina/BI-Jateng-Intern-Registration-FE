import axios from 'axios';
import { toast } from 'react-toastify';
import { setDSSResults } from '../reducers/DSSResultReducers';

export const getDSSResults =
  (
    month,
    year,
    search,
    currentPage,
    setTotalPages,
    setTotalItems,
    setLoading
  ) =>
  async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      url: `${import.meta.env.VITE_BACKEND_API}/DSS`,
      params: {
        month,
        year,
        page: currentPage,
        limit: 10,
        sort: 'asc',
        search: search,
      },
    };
    try {
      setLoading(true);
      const response = await axios.request(config);
      dispatch(setDSSResults(response.data.data));
      setTotalPages(response.data.pagination.totalPages);
      setTotalItems(response.data.pagination.totalItems);
    } catch (error) {
      error;
      dispatch(setDSSResults([]));
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

export const calculateDSS =
  (data, setLoading, navigate) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      url: `${import.meta.env.VITE_BACKEND_API}/DSS`,
      data,
    };
    try {
      setLoading(true);
      await axios.request(config);
      navigate(`/admin/hasil-seleksi?month=${data.month}&year=${data.year}`);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

export const sendAcceptedEmail =
  (data, setLoading) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      url: `${import.meta.env.VITE_BACKEND_API}/DSS/send-mail-accepted-intern`,
      data,
    };

    try {
      setLoading(true);
      await axios.request(config);
      toast.success('Email berhasil dikirim');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
