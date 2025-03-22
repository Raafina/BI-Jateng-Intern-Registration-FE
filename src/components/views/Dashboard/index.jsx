import TableData from '../../UI/TableData';
import DashboardLayout from '../../Layouts/DashboardLayout';

const Dashboard = () => {
  return (
    <>
      <DashboardLayout title="Dashboard" description="Dashboard">
        <TableData />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
