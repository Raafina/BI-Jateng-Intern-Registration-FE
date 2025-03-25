import axios from 'axios';
import { toast } from 'react-toastify';
import { setSAWResults } from '../reducers/SAWResultReducers';

export const getSAWResults =
  (month, year, currentPage, setTotalPages, setTotalItems) =>
  async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      url: `${import.meta.env.VITE_BACKEND_API}/SAW`,
      params: {
        month,
        year,
        page: currentPage,
        limit: 10,
        sort: 'asc',
      },
    };
    try {
      const response = await axios.request(config);
      dispatch(setSAWResults(response.data.data));
      setTotalPages(response.data.pagination.totalPages);
      setTotalItems(response.data.pagination.totalItems);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      dispatch(setSAWResults([]));
      setTotalPages(0);
    }
  };
