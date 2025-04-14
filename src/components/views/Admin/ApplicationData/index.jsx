import { useEffect } from 'react';
import DashboardLayout from '../../../Layouts/DashboardLayout';
import TableData from '../../../UI/TableData';
import { useDisclosure } from '@heroui/react';
import { COLUMN_LISTS_APPLICATION_DATA } from '../ApplicationData/ApplicationData.constant';
import useApplicationData from './useApplicationData';
import ApplicationDataModal from './ApplicationDataModal';
import UpdateDataModal from './UpdateDataModal';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import DeleteDataModal from './DeleteDataModal';

const ApplicationData = () => {
  const {
    ApplicationsData,
    totalPages,
    currentPage,
    month,
    year,
    loading,
    selectedId,
    setSelectedId,
    setMonth,
    setYear,
    fetchResults,
    handlePageChange,
    handleSearch,
  } = useApplicationData();

  const applicationDataModal = useDisclosure();
  const updateDataModal = useDisclosure();
  const deleteDataModal = useDisclosure();

  useEffect(() => {
    fetchResults(1);
  }, [month, year, fetchResults, currentPage, selectedId]);

  const renderCell = (item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case 'division_request':
        return (
          <p
            className={`inline px-2 py-1 rounded-lg ${
              {
                'Humas': 'bg-green-700 text-white',
                'Makroprudensial': 'bg-primary text-white',
                'Sistem Pembayaran': 'bg-red-700 text-white',
                'Internal': 'bg-indigo-400 text-white',
                'Pengelolaan Uang Rupiah': 'bg-slate-700 text-white',
                'Moneter': 'bg-cyan-500 text-white',
              }[cellValue] || ''
            }`}
          >
            {cellValue}
          </p>
        );
      case 'actions':
        return (
          <div className="flex justify-center gap-2">
            <button
              type="button"
              className="text-blue bg-transparent hover:bg-transparent"
              onClick={() => {
                setSelectedId(item.id);
                console.log(selectedId, 'index');
                updateDataModal.onOpen(item);
              }}
            >
              <FaRegEdit size={15} />
            </button>
            <button
              type="button"
              className="text-red-600 bg-transparent hover:bg-transparent"
              onClick={() => {
                setSelectedId(item.id);
                deleteDataModal.onOpen(item);
              }}
            >
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
      description="Halaman ini akan menampilkan hasil seleksi yang telah dilakukan dengan sistem."
    >
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
      <UpdateDataModal
        {...updateDataModal}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <DeleteDataModal
        {...deleteDataModal}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </DashboardLayout>
  );
};

export default ApplicationData;
