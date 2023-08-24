import Table from "../../components/table/table";
import { useEffect, useState } from "react";
import { fetchTableData, chartData } from "../../service/dashboard-service";
import { BarChart } from "../../components/chart/bar-chart";

const Dashboard = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    let result = fetchTableData();
    setTableData(result);
  }, []);

  return (
    <>
      <BarChart data={chartData} />
      <Table className="table table-bordered" data={tableData} />
    </>
  );
};

export default Dashboard;
