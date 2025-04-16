import { useEffect } from 'react';
import { useDisclosure } from '@heroui/react';
import { COLUMN_LIST_WEIGHT_DATA } from './WeightData.constant';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import TableData from '../../../UI/TableData';
import AddWeightDataModal from './AddWeightDataModal';
import DeleteWeightDataModal from './DeleteWeightDataModal';
import UpdateWeightDataModal from './UpdateWeightDataModal';
import useWeightData from './useWeightData';
const WeightData = () => {
  const {
    WeightsData,
    totalPages,
    currentPage,
    loading,
    selectedId,
    setSelectedId,
    fetchResults,
    handlePageChange,
    handleSearch,
    handleClearSearch,
  } = useWeightData();

  const addWeightDataModal = useDisclosure();
  const updateWeightDataModal = useDisclosure();
  const deleteWeightDataModal = useDisclosure();

  useEffect(() => {
    fetchResults(currentPage);
  }, [currentPage, fetchResults]);

  const renderCell = (item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case 'actions':
        return (
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="bg-primary text-white p-2 rounded-xl hover:bg-opacity-80"
              onClick={() => {
                setSelectedId(item.id);
                updateWeightDataModal.onOpen(item);
              }}
            >
              <FaRegEdit size={15} />
            </button>
            <button
              type="button"
              className="bg-red-600 text-white p-2 rounded-xl hover:bg-opacity-80"
              onClick={() => {
                setSelectedId(item.id);
                deleteWeightDataModal.onOpen(item);
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
        buttonTopContentLabel="Tambah Bobot"
        buttonTopContentLabelSecond="Update Data"
        columns={COLUMN_LIST_WEIGHT_DATA}
        data={WeightsData || []}
        emptyContent="Data bobot tidak ditemukan"
        isLoading={loading}
        renderCell={renderCell}
        totalPages={totalPages}
        currentPage={currentPage}
        onClickButtonTopContent={addWeightDataModal.onOpen}
        onChangePage={handlePageChange}
        onChangeSearch={handleSearch}
        onClearSearch={handleClearSearch}
      />

      <AddWeightDataModal {...addWeightDataModal} fetchResults={fetchResults} />
      <UpdateWeightDataModal
        {...updateWeightDataModal}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        fetchResults={fetchResults}
      />
      <DeleteWeightDataModal
        {...deleteWeightDataModal}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        fetchResults={fetchResults}
      />
    </section>
  );
};

export default WeightData;
