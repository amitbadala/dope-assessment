import { sleep } from "./../utils";
import { faker } from "@faker-js/faker";

const generateFakeData = (numEntries) => {
  const data = [];
  for (let i = 0; i < numEntries; i++) {
    const entry = {
      id: i + 1,
      name: faker.person.fullName(),
      location: faker.location.city(),
      health: faker.helpers.arrayElement(["Healthy", "Error", "Disabled"]),
      ip: faker.internet.ipv4(),
      volume: faker.number.int({ max: 1000 }),
    };
    data.push(entry);
  }

  return data;
};

const fetchTableData = async () => {
  await sleep(5000);
  let fakeData = generateFakeData(100);
  return fakeData;
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
