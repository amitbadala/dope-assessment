import Table from "../../components/table/table";
import { useEffect, useState } from "react";
import { fetchTableData, chartData } from "../../service/dashboard-service";
import { BarChart } from "../../components/chart/bar-chart";
import StatsCard from "../../components/stats/stats-card";
import SampleForm from "../../components/form/form";
import { columnsConfig } from "../../constant/app-usage-config";
import { useQuery } from "react-query";
import "./dashboard.less";

const Dashboard = () => {
  const [tableData, setTableData] = useState([]);
  const { data, error, isLoading } = useQuery("tableData", fetchTableData);

  //   useEffect(() => {
  //     getTableData();
  //   }, []);

  //   const getTableData = async () => {
  //     let result = await fetchTableData();
  //     setTableData(result);
  //   };

  return (
    <>
      <div className="dashboard-container">
        <div className="grid-50">
          <div className="flex flex-column space-between">
            <StatsCard totalUsers={34} /> <SampleForm />
          </div>
          <BarChart data={chartData} />
        </div>
        <Table
          className="table table-bordered"
          columns={columnsConfig}
          isLoading={isLoading}
          error={error}
          data={data}
        />
      </div>
    </>
  );
};

export default Dashboard;
