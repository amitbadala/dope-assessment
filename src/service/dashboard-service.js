import Badge from "../components/badge/badge";

const fetchTableData = () => {
  const sampleData = [
    {
      id: "0",
      name: "Naruto",
      location: "konoha",
      health: <Badge type="success" label="Healthy" />,
      ip: "abcd",
      volume: 1000000000, // in bytes
    },
    {
      id: "0",
      name: "Sasuke",
      location: "Orochimaru Hidden Village",
      health: <Badge type="danger" label="Error" />,
      ip: "abcd",
      volume: 300000000, // in bytes
    },
  ];
  return sampleData;
};

export { fetchTableData };
