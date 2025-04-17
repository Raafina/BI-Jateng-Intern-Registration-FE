import TableData from '../../../UI/TableData';
import PropTypes from 'prop-types';
import { useDisclosure } from '@heroui/react';
import { useEffect } from 'react';
import { COLUMN_LISTS_RESULT_DATA } from './ResultData.constant';
import useResultData from './useResultData';
import SearchResultDataModal from './SearchResultDataModal';

const ResultData = () => {
  const {
    ResultSAW_Data,
    totalPages,
    currentPage,
    month,
    year,
    loading,
    setMonth,
    setYear,
    fetchResults,
    handlePageChange,
    handleSearch,
  } = useResultData();

  const searchResultDataModal = useDisclosure();

  useEffect(() => {
    fetchResults(1);
  }, [month, year, fetchResults]);

  const renderCell = (item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case 'accepted_division':
        return (
          <p
            className={`inline px-2 py-1 rounded-lg ${
              {
                humas: 'bg-green-700 text-white',
                makroprudensial: 'bg-primary text-white',
                sistem_pembayaran: 'bg-red-700 text-white',
                internal: 'bg-indigo-400 text-white',
                pengelolaan_uang_rupiah: 'bg-slate-700 text-white',
                moneter: 'bg-cyan-500 text-white',
              }[cellValue] || ''
            }`}
          >
            {cellValue}
          </p>
        );
      default:
        return cellValue;
    }
  };

  return (
    <section>
      <TableData
        showDate
        buttonTopContentLabel="Ubah Periode"
        columns={COLUMN_LISTS_RESULT_DATA}
        data={ResultSAW_Data}
        emptyContent="Hasil seleksi tidak ditemukan"
        isLoading={loading}
        renderCell={renderCell}
        totalPages={totalPages}
        currentPage={currentPage}
        onClickButtonTopContent={searchResultDataModal.onOpen}
        onChangePage={handlePageChange}
        onChangeSearch={handleSearch}
      />
      <SearchResultDataModal
        {...searchResultDataModal}
        setMonth={setMonth}
        setYear={setYear}
      />
    </section>
  );
};

ResultData.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
};

export default ResultData;
