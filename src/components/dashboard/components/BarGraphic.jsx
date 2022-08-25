import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "chartjs-adapter-date-fns";

export const BarGraphic = ({ chartData }) => {
  return (
    <>
      <Bar
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              min: "1980-01-01",
              type: "time",
              time: {
                unit: "week",
              },
            },
          },
        }}
      />
    </>
  );
};
