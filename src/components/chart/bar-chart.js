// components/BarChart.js
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

export const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.userGain),
    datasets: [
      {
        label: "App Usage Volume",
        data: data.map((item) => item.userGain),
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.8)",
        hoverBorderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar data={chartData} />;
    </div>
  );
};
