import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export interface IProps {
  color?: string;
  negativeColor?:string;
  title: string;
  categories: string[];
  data: number[];
}

export const NagetiveBar: React.FC<IProps> = ({
  color = "#05A793",
  negativeColor="#E45D3B",
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
    series: [{ name: "Logs count", type: "bar", data: data ,negativeColor}],
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
