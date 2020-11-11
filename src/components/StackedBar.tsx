import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export interface stackedProps {
  primaryColor?: string;
  secondaryColor?: string;
  title: string;
  categories: string[];
  data: number[][];
}

export const StackedBar: React.FC<stackedProps> = ({
  primaryColor = "#01597A",
  secondaryColor="#199DE6",
  title,
  categories,
  data,
}) => {
  const options: Highcharts.Options = {
    title: {
      text: title,
    },
    xAxis: {
      categories: categories,
      title: {
        text: null,
      },
    },
    yAxis: [
      {
        // default options
        title: {
          text: "",
        },
      },
      {
        linkedTo: 0,
        opposite: true,
        title: {
          text: "",
        },
      },
    ],
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: [
      { type: "bar", name: "Order", color: primaryColor, data: data[0] },
      { type: "bar", name: "Profit", color:secondaryColor, data: data[1] },
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
