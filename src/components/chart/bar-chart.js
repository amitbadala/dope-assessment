import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import "./bar-chart.less";

Chart.register(CategoryScale);

// Color for bars
const colors = ["#13A877", "#DE9E6A", "#CF6262"];

export const BarChart = ({ data = [] }) => {
  const topFive = data.sort((a, b) => b.volume - a.volume).slice(0, 5);

  const chartData = {
    labels: topFive.map((item) => item.name),
    datasets: [
      {
        label: "App Usage Volume",
        data: topFive.map((item) => item.volume),
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
        min: 930, // Minimum value for y-axis
        max: 1000, // Maximum value for y-axis
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
      <h2 style={{ textAlign: "center", color: "white" }}>
        Top 5 Users by Volume
      </h2>
      <Bar data={chartData} options={chartOptions} />;
    </div>
  );
};
