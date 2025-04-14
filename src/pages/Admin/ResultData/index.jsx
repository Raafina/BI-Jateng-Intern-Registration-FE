import ResultData from '../../../components/views/Admin/ResultData';
import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import useApplicationData from '../../../components/views/Admin/ApplicationData/useApplicationData';
const ResultDataPage = () => {
  const { month, year } = useApplicationData();

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
