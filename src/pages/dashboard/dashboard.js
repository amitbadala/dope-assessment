import Table from "../../components/table/table";
import { fetchTableData } from "../../service/dashboard-service";
import { BarChart } from "../../components/chart/bar-chart";
import StatsCard from "../../components/stats/stats-card";
import SampleForm from "../../components/form/form";
import { columnsConfig } from "../../constant/app-usage-config";
import { useQuery } from "react-query";
import "./dashboard.less";

const Dashboard = () => {
  const { data, error, isLoading } = useQuery("tableData", fetchTableData);
  return (
    <div className="dashboard-container">
      <img
        className="brand"
        src="https://uploads-ssl.webflow.com/623381c2c01066b228a1670b/623cc8153e74296ac6fbeaf0_logo-vertical.svg"
        alt="logo"
      />
      <div className="grid-50">
        <div className="flex flex-column space-between">
          <StatsCard totalUsers={34} /> <SampleForm />
        </div>
        <BarChart data={data} />
      </div>
      <div className="table-header">
        <h4>🚀 App Usage</h4>
        <div>
          <input placeholder="Search Data" type="text"></input>
        </div>
      </div>
      <Table
        className="table table-bordered"
        columns={columnsConfig}
        isLoading={isLoading}
        error={error}
        data={data}
      />
    </div>
  );
};

export default Dashboard;
