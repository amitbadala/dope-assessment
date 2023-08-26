import Table from "../../components/table/table";
import { useEffect, useState } from "react";
import { fetchTableData, chartData } from "../../service/dashboard-service";
import { BarChart } from "../../components/chart/bar-chart";
import SampleForm from "../../components/form/form";
import "./dashboard.less";

const Dashboard = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    let result = fetchTableData();
    setTableData(result);
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <div>
          <BarChart data={chartData} />
          <SampleForm />
        </div>
        <Table className="table table-bordered" data={tableData} />
      </div>
    </>
  );
};

export default Dashboard;
