import { Bar } from "react-chartjs-2";
const Histogram = ({ chartData }) => {
  return (
    <div className="chart-container" id="graph">
      <Bar
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              min:0,
              max:100
            }
          }
        }}
      />
    </div>
  );
};

export default Histogram;