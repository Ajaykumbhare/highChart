import React from "react";
import { Chart, IProps } from "./components/Chart";
import { NagetiveBar, INegativeProps } from "./components/NagetiveBar";
import { StackedBar, stackedProps } from "./components/StackedBar";

function App() {
  const chartData: IProps = {
    categories: [
      "Phillip T. Church",
      "Eric J. Ek",
      "Patricia R. Bourdeau",
      "Matthew P. Fowler",
      "Lindsay C. McClure",
      "Ashley J. Bryant",
    ],
    data: [5, 4, 148, 50, 2, 2],
  };

  const negativeData: INegativeProps = {
    categories: [
      "Phillip T. Church",
      "Eric J. Ek",
      "Patricia R. Bourdeau",
      "Matthew P. Fowler",
      "Lindsay C. McClure",
      "Ashley J. Bryant",
    ],
    data: [
      [-1, -2, -3, -4, -5],
      [1, 2, 3, 4, 5],
    ],
  };

  const stackedData: stackedProps = {
    categories: [
      "Phillip T. Church",
      "Eric J. Ek",
      "Patricia R. Bourdeau",
      "Matthew P. Fowler",
      "Lindsay C. McClure",
      "Ashley J. Bryant",
    ],
    data: [
      [5, 3, 4, 7, 2],
      [2, 2, 3, 2, 1],
    ],
  };

  return (
    <div className="App">
      <Chart {...chartData} />
      <NagetiveBar {...negativeData} />
      <StackedBar {...stackedData} />
    </div>
  );
}

export default App;
