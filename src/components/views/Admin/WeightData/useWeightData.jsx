import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeights } from '../../../../redux/actions/weightActions';
import useDebounce from '../../../../hooks/useDebounce';

const useWeightData = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  const dispatch = useDispatch();
  const debounce = useDebounce();

  const WeightsData = useSelector((state) => state.weight.weights);

  const fetchResults = useCallback(
    (page = 1, search = '') => {
      dispatch(
        getWeights(search, page, setTotalPages, setTotalItems, setLoading)
      );
    },
    [dispatch, setTotalPages, setTotalItems]
  );

  const handleSearch = (e) => {
    const search = e.target.value;

    debounce(() => {
      setCurrentPage(1);
      fetchResults(1, search);
    }, 1000);
  };

  const handleClearSearch = () => {
    setCurrentPage(1);
    fetchResults(1);
  };

  const handlePageChange = useCallback(
    (newPage) => {
      setCurrentPage(newPage);
      fetchResults(newPage);
    },
    [fetchResults]
  );

  return {
    totalPages,
    totalItems,
    currentPage,
    loading,
    WeightsData,
    selectedId,
    setSelectedId,
    fetchResults,
    handlePageChange,
    handleSearch,
    handleClearSearch,
  };
};

export default useWeightData;
