import Badge from "../components/badge/badge";
import { sleep } from "./../utils";

const fetchTableData = async () => {
  await sleep(5000);
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
      health: "Error",
      ip: "abcd",
      volume: 300000000, // in bytes
    },
  ];
  return sampleData;
};

const chartData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

export { fetchTableData, chartData };
