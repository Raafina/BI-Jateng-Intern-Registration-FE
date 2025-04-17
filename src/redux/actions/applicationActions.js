import axios from 'axios';
import { toast } from 'react-toastify';
import {
  setApplications,
  setApplication,
} from '../reducers/applicationReducers';

export const getApplications =
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
      url: `${import.meta.env.VITE_BACKEND_API}/applications`,
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
      dispatch(setApplications(response.data.data));
      setTotalPages(response.data.pagination.totalPages);
      setTotalItems(response.data.pagination.totalItems);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      dispatch(setApplications([]));
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

export const getApplication =
  (id, setLoading) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      url: `${import.meta.env.VITE_BACKEND_API}/applications/${id}`,
    };
    try {
      setLoading(true);
      const response = await axios.request(config);
      dispatch(setApplication(response.data.data));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

export const addApplication = (data, setLoading, setSuccess) => {
  return async () => {
    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${import.meta.env.VITE_BACKEND_API}/applications`,
      data,
    };
    try {
      setLoading(true);
      await axios.request(config);
      setSuccess(true);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
};

export const updateApplication =
  (id, data, setLoading, setSuccess) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      url: `${import.meta.env.VITE_BACKEND_API}/applications/${id}`,
      data,
    };
    try {
      setLoading(true);
      await axios.request(config);
      setSuccess(true);
      toast.success('Data pendaftar berhasil diubah');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

export const deleteApplication =
  (id, setLoading, setSuccess) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      url: `${import.meta.env.VITE_BACKEND_API}/applications/${id}`,
    };
    try {
      setLoading(true);
      await axios.request(config);
      setSuccess(true);
      toast.success('Data pendaftar berhasil dihapus');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
