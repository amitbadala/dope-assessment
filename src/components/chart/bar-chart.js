import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import "./bar-chart.less";

Chart.register(CategoryScale);

// Color for bars
const colors = ["#13A877", "#DE9E6A", "#CF6262"];

export const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.userGain),
    datasets: [
      {
        label: "App Usage Volume",
        data: data.map((item) => item.userGain),
        backgroundColor: colors,
        borderColor: colors.map((color) => color.replace("0.6", "1")), // Assuming you're using rgba colors
        borderWidth: 1,
        hoverBackgroundColor: colors.map((color) =>
          color.replace("0.6", "0.8")
        ),
        hoverBorderColor: colors.map((color) => color.replace("0.6", "1")),
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          color: "white", // Color for x-axis labels
        },
      },
      y: {
        ticks: {
          color: "white", // Color for y-axis labels
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white", // Color for legend labels
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center", color: "white" }}>Bar Chart</h2>
      <Bar data={chartData} options={chartOptions} />;
    </div>
  );
};
