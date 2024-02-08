import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
  return (
    <Line
      data={chartData}
      options={{ maintainAspectRatio: false, responsive: true }}
    />
  );
}

export default LineChart;
