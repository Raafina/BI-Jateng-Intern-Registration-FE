import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApplications } from '../../../../redux/actions/applicationActions';
import useDebounce from '../../../../hooks/useDebounce';

export const useResultData = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [month, setMonth] = useState('08');
  const [year, setYear] = useState('2025');
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const debounce = useDebounce();
  const ResultSAW_Data = useSelector((state) => state.SAWResult.SAWResults);

  const fetchResults = useCallback(
    (page = 1, searchTerm = '') => {
      dispatch(
        getApplications(
          month,
          year,
          searchTerm,
          page,
          setTotalPages,
          setTotalItems,
          setLoading
        )
      );
    },
    [dispatch, month, year, setTotalPages, setTotalItems]
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    debounce(() => {
      fetchResults(1, search);
    }, 1000);
  };

  const handleClearSearch = () => {
    setSearch('');
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
    ResultSAW_Data,
    totalPages,
    totalItems,
    currentPage,
    month,
    year,
    loading,
    fetchResults,
    setMonth,
    setYear,
    handlePageChange,
    handleSearch,
    handleClearSearch,
  };
};

export default useResultData;
