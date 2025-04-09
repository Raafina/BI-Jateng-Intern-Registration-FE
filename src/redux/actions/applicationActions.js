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
        Authorization: `Bearer ${token}`,
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
        Authorization: `Bearer ${token}`,
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
