import Table from "../../components/table/table";
import { useEffect, useState } from "react";
import { fetchTableData } from "../../service/dashboard-service";

const Dashboard = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    let result = fetchTableData();
    setTableData(result);
  }, []);

  return <Table className="table table-bordered" data={tableData} />;
};

export default Dashboard;
