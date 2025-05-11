import ResultData from '../../../components/views/Admin/ResultData';
import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import useResultData from '../../../components/views/Admin/ResultData/useResultData';
const ResultDataPage = () => {
  const { month, year } = useResultData();

  return (
    <DashboardLayout
      title={'Hasil Seleksi Periode  ' + month + '/' + year}
      description={
        'Halaman ini akan menampilkan hasil seleksi periode ' +
        month +
        '/' +
        year
      }
    >
      <ResultData />
    </DashboardLayout>
  );
};

export default ResultDataPage;
