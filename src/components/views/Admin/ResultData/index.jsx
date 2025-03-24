import { useCallback } from 'react';
import DashboardLayout from '../../../Layouts/DashboardLayout';
import TableData from '../../../UI/TableData';
import { COLUMN_LISTS_RESULT_DATA } from './ResultData.constant';
const ResultData = () => {
  const renderCell = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];
    return cellValue;
  }, []);

  return (
    <>
      <DashboardLayout
        title="Hasil Seleksi"
        description="Halaman ini akan menampilkan hasil seleksi yang telah dilakukan dengan sistem.">
        <TableData
          columns={COLUMN_LISTS_RESULT_DATA}
          data={[
            {
              id: 1,
              full_name: 'A',
              accepted_division: 'A',
              IPK: 'A',
              intern_category: 'A',
              college_major: 'A',
              CV_score: 'A',
              motivation_letter_score: 'A',
            },
          ]}
          emptyContent="Hasil seleksi tidak ditemukan"
          isLoading={false}
          renderCell={renderCell}
        />
      </DashboardLayout>
    </>
  );
};

export default ResultData;
