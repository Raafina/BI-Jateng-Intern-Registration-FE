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
  const [selectedId, setSelectedId] = useState('');

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
