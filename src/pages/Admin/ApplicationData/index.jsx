import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import ApplicationData from '../../../components/views/Admin/ApplicationData';
import useApplicationData from '../../../components/views/Admin/ApplicationData/useApplicationData';

const ApplicationDataPage = () => {
  const { month, year } = useApplicationData();
  return (
    <DashboardLayout
      title={'Data Pendaftar Periode  ' + month + '/' + year}
      description={
        'Halaman ini akan menampilkan data pendaftar untuk periode ' +
        month +
        '/' +
        year
      }
    >
      <ApplicationData />
    </DashboardLayout>
  );
};

export default ApplicationDataPage;
