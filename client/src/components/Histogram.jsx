import { Bar } from "react-chartjs-2";
const Histogram = ({ chartData }) => {
  return (
    <div className="chart-container" id="graph">
      <label class="toggle">
        <input type="checkbox" name="" id="" />
        <span class="slider"></span>
      </label>
      <Bar
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false
            }
          },
          barThickness: 30,
          scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              beginAtZero: true,
              min:0,
              max:100,
              grid: {
                display: true
              },
              title: {
                display: true,
                text: "Probability (%)"
              }
            }
          }
        }}
      />
    </div>
  );
};

export default Histogram;