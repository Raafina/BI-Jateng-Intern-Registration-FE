import { useEffect } from 'react';
import { useDisclosure } from '@heroui/react';
import { COLUMN_LISTS_APPLICATION_DATA } from '../ApplicationData/ApplicationData.constant';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import TableData from '../../../UI/TableData';
import useApplicationData from './useApplicationData';
import ApplicationDataModal from './ApplicationDataModal';
import UpdateApplicationDataModal from './UpdateApplicationDataModal';
import DeleteApplicationDataModal from './DeleteApplicationDataModal';

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
    handleClearSearch,
  } = useApplicationData();

  const applicationDataModal = useDisclosure();
  const updateApplicationDataModal = useDisclosure();
  const deleteApplicationDataModal = useDisclosure();

  useEffect(() => {
    fetchResults(currentPage);
  }, [month, year, currentPage, fetchResults]);

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
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="bg-primary text-white p-2 rounded-xl hover:bg-opacity-80"
              onClick={() => {
                setSelectedId(item.id);
                updateApplicationDataModal.onOpen(item);
              }}
            >
              <FaRegEdit size={15} />
            </button>
            <button
              type="button"
              className="bg-red-600 text-white p-2 rounded-xl hover:bg-opacity-80"
              onClick={() => {
                setSelectedId(item.id);
                deleteApplicationDataModal.onOpen(item);
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
    <section>
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
        onClickButtonTopContentSecond={updateApplicationDataModal.onOpen}
        onChangePage={handlePageChange}
        onChangeSearch={handleSearch}
        onClearSearch={handleClearSearch}
      />

      <ApplicationDataModal
        {...applicationDataModal}
        setMonth={setMonth}
        setYear={setYear}
      />
      <UpdateApplicationDataModal
        {...updateApplicationDataModal}
        fetchResults={fetchResults}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <DeleteApplicationDataModal
        {...deleteApplicationDataModal}
        fetchResults={fetchResults}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </section>
  );
};

export default ApplicationData;
