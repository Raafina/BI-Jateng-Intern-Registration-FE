import { useEffect } from 'react';
import { useDisclosure } from '@heroui/react';
import TableData from '../../../UI/TableData';
import AddWeightDataModal from './AddWeightDataModal';
import { COLUMN_LIST_WEIGHT_DATA } from './WeightData.constant';
import useWeightData from './useWeightData';
const WeightData = () => {
  const {
    WeightsData,
    totalPages,
    currentPage,
    loading,
    // selectedId,
    // setSelectedId,
    fetchResults,
    handlePageChange,
    handleSearch,
    handleClearSearch,
  } = useWeightData();

  const addWeightDataModal = useDisclosure();

  useEffect(() => {
    fetchResults(currentPage);
  }, [currentPage, fetchResults]);

  const renderCell = (item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
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
    </section>
  );
};

export default WeightData;
