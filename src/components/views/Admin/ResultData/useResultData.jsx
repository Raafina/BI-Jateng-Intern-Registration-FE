import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSAWResults } from '../../../../redux/actions/SAWResultActions';

export const useResultData = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [month, setMonth] = useState('08');
  const [year, setYear] = useState('2025');

  const dispatch = useDispatch();
  const ResultSAW_Data = useSelector((state) => state.SAWResult.SAWResults);

  const fetchResults = useCallback(
    (page = 1) => {
      dispatch(getSAWResults(month, year, page, setTotalPages, setTotalItems));
    },
    [dispatch, month, year, setTotalPages, setTotalItems]
  );

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
  };
};

export default useResultData;
