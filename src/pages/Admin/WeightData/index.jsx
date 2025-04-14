import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import WeightData from '../../../components/views/Admin/WeightData';

const WeightDataPage = () => {
  return (
    <DashboardLayout title="Bobot" description="Bobot">
      <WeightData />
    </DashboardLayout>
  );
};

export default WeightDataPage;
