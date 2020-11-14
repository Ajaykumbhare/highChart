import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export interface INegativeProps {
  color?: string;
  negativeColor?: string;
  categories: string[];
  data: number[][];
}

export const NagetiveBar: React.FC<INegativeProps> = ({ categories, data }) => {
  const options: Highcharts.Options = {
    xAxis: {
      categories: categories,
    },
    series: [
      {
        name: "Behind Schedule",
        data: data[0],
        color: "#E35D39",
        visible: true,
        type: "bar",
      },
      {
        name: "Ahead  Schedule",
        data: data[1],
        color: "#00A68F",
        visible: true,
        type: "bar",
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
