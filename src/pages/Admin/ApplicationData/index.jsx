import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import ApplicationData from '../../../components/views/Admin/ApplicationData';

const ApplicationDataPage = () => {
  return (
    <DashboardLayout
      title="Data Pendaftar Periode"
      description="Halaman ini akan menampilkan data lengkap pendaftar magang untuk periode tertentu."
    >
      <ApplicationData />
    </DashboardLayout>
  );
};

export default ApplicationDataPage;
