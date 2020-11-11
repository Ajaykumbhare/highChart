import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export interface IProps {
  color?: string;
  title: string;
  categories: string[];
  data: number[];
}

export const Chart: React.FC<IProps> = ({
  color = "#00AEF0",
  title,
  categories,
  data,
}) => {
  const options: Highcharts.Options = {
    title: {
      text: title,
    },
    colors: [color],
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
    series: [{ name: "Logs count", type: "bar", data: data }],
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
