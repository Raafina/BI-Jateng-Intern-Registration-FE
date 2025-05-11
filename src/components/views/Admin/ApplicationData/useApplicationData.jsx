import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApplications } from '../../../../redux/actions/applicationActions';
import useDebounce from '../../../../hooks/useDebounce';

export const useResultData = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  const now = new Date();
  const defaultMonth = String(now.getMonth() + 1).padStart(2, '0');
  const defaultYear = String(now.getFullYear());

  const [month, setMonth] = useState(defaultMonth);
  const [year, setYear] = useState(defaultYear);

  const dispatch = useDispatch();
  const debounce = useDebounce();

  const ApplicationsData = useSelector(
    (state) => state.application.applications
  );

  const fetchResults = useCallback(
    (page = 1, search = '') => {
      dispatch(
        getApplications(
          month,
          year,
          search,
          page,
          setTotalPages,
          setTotalItems,
          setLoading
        )
      );
    },
    [month, year, setTotalPages, setTotalItems, dispatch]
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

  useEffect(() => {
    fetchResults(currentPage);
  }, [month, year, currentPage, fetchResults]);

  return {
    ApplicationsData,
    totalPages,
    totalItems,
    currentPage,
    month,
    year,
    loading,
    selectedId,
    setSelectedId,
    fetchResults,
    setMonth,
    setYear,
    handlePageChange,
    handleSearch,
    handleClearSearch,
  };
};

export default useResultData;
