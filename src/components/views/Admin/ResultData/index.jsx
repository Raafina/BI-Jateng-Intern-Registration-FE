import DashboardLayout from '../../../Layouts/DashboardLayout';
import TableData from '../../../UI/TableData';
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
    setMonth,
    setYear,
    month,
    year,
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
                moneter: 'bg-orange-700 text-white',
              }[cellValue] || ''
            }`}>
            {cellValue}
          </p>
        );
      default:
        return cellValue;
    }
  };

  return (
    <DashboardLayout
      title="Hasil Seleksi"
      description="Halaman ini akan menampilkan hasil seleksi yang telah dilakukan dengan sistem.">
      <TableData
        showDate
        buttonTopContentLabel="Cari Data"
        columns={COLUMN_LISTS_RESULT_DATA}
        data={ResultSAW_Data}
        emptyContent="Hasil seleksi tidak ditemukan"
        isLoading={false}
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
    </DashboardLayout>
  );
};

export default ResultData;
