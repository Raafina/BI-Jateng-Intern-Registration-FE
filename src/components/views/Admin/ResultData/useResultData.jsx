import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSAWResults } from '../../../../redux/actions/SAWResultActions';
import useDebounce from '../../../../hooks/useDebounce';

export const useResultData = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [month, setMonth] = useState('08');
  const [year, setYear] = useState('2025');
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const debounce = useDebounce();
  const ResultSAW_Data = useSelector((state) => state.SAWResult.SAWResults);

  const fetchResults = useCallback(
    (page = 1, searchTerm = '') => {
      dispatch(
        getSAWResults(
          month,
          year,
          searchTerm,
          page,
          setTotalPages,
          setTotalItems
        )
      );
    },
    [dispatch, month, year, setTotalPages, setTotalItems]
  );

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    debounce(() => {
      fetchResults(1, search);
    }, 500);
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
    fetchResults,
    ResultSAW_Data,
    totalPages,
    totalItems,
    currentPage,
    month,
    year,
    setMonth,
    setYear,
    handlePageChange,
    handleSearch,
    handleClearSearch,
  };
};

export default useResultData;
