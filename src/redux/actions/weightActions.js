import axios from 'axios';
import { toast } from 'react-toastify';
import { setWeights } from '../reducers/weightReducers';

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
        sort: 'asc',
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
