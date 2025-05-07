import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import WeightData from '../../../components/views/Admin/WeightData';

const WeightDataPage = () => {
  return (
    <DashboardLayout
      title="Data Bobot"
      description="Halaman ini akan menampilkan data bobot untuk perhitungan sistem rekomendasi magang."
    >
      <WeightData />
    </DashboardLayout>
  );
};

export default WeightDataPage;
