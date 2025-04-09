import DashboardLayout from '../../../Layouts/DashboardLayout';
import TableData from '../../../UI/TableData';
import { useDisclosure } from '@heroui/react';
import { useEffect } from 'react';
import { COLUMN_LISTS_APPLICATION_DATA } from '../ApplicationData/ApplicationData.constant';
import useApplicationData from './useApplicationData';
import ApplicationDataModal from './ApplicationDataModal';
import UpdateDataModal from './UpdateDataModal';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

const ApplicationData = () => {
  const {
    ApplicationsData,
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
  } = useApplicationData();

  const applicationDataModal = useDisclosure();
  const updateDataModal = useDisclosure();

  useEffect(() => {
    fetchResults(1);
  }, [month, year, fetchResults]);

  const renderCell = (item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case 'division_request':
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
            }`}>
            {cellValue}
          </p>
        );
      case 'actions':
        return (
          <div className="flex justify-center gap-2">
            <button
              type="button"
              className="text-blue bg-transparent hover:bg-transparent"
              onClick={() => updateDataModal.onOpen(item)}>
              <FaRegEdit size={15} />
            </button>
            <button
              type="button"
              className="text-red-600 bg-transparent hover:bg-transparent"
              onClick={() => {}}>
              <FaRegTrashAlt size={15} />
            </button>
          </div>
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
        buttonTopContentLabelSecond="Update Data"
        columns={COLUMN_LISTS_APPLICATION_DATA}
        data={ApplicationsData || []}
        emptyContent="Hasil seleksi tidak ditemukan"
        isLoading={loading}
        renderCell={renderCell}
        totalPages={totalPages}
        currentPage={currentPage}
        onClickButtonTopContent={applicationDataModal.onOpen}
        onClickButtonTopContentSecond={updateDataModal.onOpen}
        onChangePage={handlePageChange}
        onChangeSearch={handleSearch}
      />

      <ApplicationDataModal
        {...applicationDataModal}
        setMonth={setMonth}
        setYear={setYear}
      />
      <UpdateDataModal {...updateDataModal} />
    </DashboardLayout>
  );
};

export default ApplicationData;
