import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  getDSSResults,
  sendAcceptedEmail,
} from '../../../../redux/actions/DSSResultActions';
import useDebounce from '../../../../hooks/useDebounce';

export const useResultData = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const debounce = useDebounce();
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingSendMail, setLoadingSendMail] = useState(false);

  const now = new Date();
  const defaultMonth = String(now.getMonth() + 1).padStart(2, '0');
  const defaultYear = String(now.getFullYear());

  const monthByParams = searchParams.get('month');
  const yearByParams = searchParams.get('year');

  const [month, setMonth] = useState(monthByParams || defaultMonth);
  const [year, setYear] = useState(yearByParams || defaultYear);

  const ResultSAW_Data = useSelector((state) => state.DSSResult.DSSResults);

  const fetchResults = useCallback(
    (page = 1, searchTerm = '') => {
      dispatch(
        getDSSResults(
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

  const handleSendAcceptedEmail = useCallback(
    async (candidateData) => {
      dispatch(sendAcceptedEmail(candidateData, setLoadingSendMail));
    },
    [dispatch, setLoadingSendMail]
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
    fetchResults(1);
  }, [month, year, fetchResults]);

  return {
    ResultSAW_Data,
    totalPages,
    totalItems,
    currentPage,
    month,
    year,
    loading,
    loadingSendMail,
    fetchResults,
    setMonth,
    setYear,
    handlePageChange,
    handleSearch,
    handleClearSearch,
    handleSendAcceptedEmail,
  };
};

export default useResultData;
