import axios from 'axios';
import { toast } from 'react-toastify';
import { setWeights, setWeight } from '../reducers/weightReducers';

export const getWeights =
  (search, currentPage, setTotalPages, setTotalItems, setLoading) =>
  async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      url: `${import.meta.env.VITE_BACKEND_API}/weights`,
      params: {
        page: currentPage,
        limit: 10,
        sort: 'desc',
        search: search,
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(config);
      dispatch(setWeights(response.data.data));
      setTotalPages(response.data.pagination.totalPages);
      setTotalItems(response.data.pagination.totalItems);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      dispatch(setWeights([]));
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

export const getWeight = (id, setLoading) => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    url: `${import.meta.env.VITE_BACKEND_API}/weights/${id}`,
  };
  try {
    setLoading(true);
    const response = await axios.request(config);
    dispatch(setWeight(response.data.data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  } finally {
    setLoading(false);
  }
};

export const addWeight =
  (data, setLoading, setSuccess) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      url: `${import.meta.env.VITE_BACKEND_API}/weights`,

      data,
    };
    try {
      setLoading(true);
      await axios.request(config);
      setSuccess(true);
      toast.success('Data bobot berhasil ditambahkan');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

export const updateWeight =
  (id, data, setLoading, setSuccess) => async (dispatch, getState) => {
    const { token } = getState().auth;
    console.log(data, 'feth');
    let config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      url: `${import.meta.env.VITE_BACKEND_API}/weights/${id}`,
      data,
    };
    try {
      setLoading(true);
      await axios.request(config);
      setSuccess(true);
      toast.success('Data bobot berhasil diubah');
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

export const deleteWeight =
  (id, setLoading, setSuccess) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      url: `${import.meta.env.VITE_BACKEND_API}/weights/${id}`,
    };
    try {
      setLoading(true);
      await axios.request(config);
      setSuccess(true);
      toast.success('Data bobot berhasil dihapus');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
