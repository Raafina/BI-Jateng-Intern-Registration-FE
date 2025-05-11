import ResultData from '../../../components/views/Admin/ResultData';
import DashboardLayout from '../../../components/Layouts/DashboardLayout';
const ResultDataPage = () => {
  return (
    <DashboardLayout
      title={'Hasil Seleksi'}
      description={
        'Halaman ini menampilkan hasil seleksi peserta magang berdasarkan data dan kriteria yang telah ditentukan sebelumnya.'
      }
    >
      <ResultData />
    </DashboardLayout>
  );
};

export default ResultDataPage;
