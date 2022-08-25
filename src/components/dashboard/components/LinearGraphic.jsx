import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "chartjs-adapter-date-fns";

export const LinearGraphic = ({ chartData }) => {
  return (
    <>
      <Line
        data={chartData}
        options={{
          scales: {
            y: {
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
