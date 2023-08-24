import Table from "../../components/table/table";

const sampleData = [
  {
    id: "0",
    name: "Naruto",
    location: "konoha",
    health: "Healthy",
    ip: "abcd",
    volume: 1000000000, // in bytes
  },
  {
    id: "0",
    name: "Sasuke",
    location: "Orochimaru Hidden Village",
    health: "error",
    ip: "abcd",
    volume: 300000000, // in bytes
  },
];

const Dashboard = () => {
  return <Table data={sampleData} />;
};

export default Dashboard;
