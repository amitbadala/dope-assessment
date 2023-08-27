import Badge from "../components/badge/badge";

const columnsConfig = {
  id: { title: "Id", dataIndex: "id", key: "id", type: "string" },
  name: { title: "Name", dataIndex: "name", key: "name", type: "string" },
  location: {
    title: "Location",
    dataIndex: "location",
    key: "location",
    type: "string",
  },
  health: {
    title: "Health",
    dataIndex: "health",
    key: "health",
    type: "reactElement",
    render: (value) => <Badge type={value} label={value} />,
  },
  ip: { title: "Ip", dataIndex: "ip", key: "ip", type: "string" },
  volume: {
    title: "Volume",
    dataIndex: "volume",
    key: "volume",
    type: "number",
  },
};

export { columnsConfig };
