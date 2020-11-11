import React from "react";
import { Chart, IProps } from "./components/Chart";
import {NagetiveBar} from "./components/NagetiveBar";
import {StackedBar,stackedProps} from "./components/StackedBar"

function App() {

  const chartData: IProps = {
    title: "Daily Log Count by User",
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

  const negativeData: IProps = {
    title: "Daily Log Count by User",
    categories: [
      "Phillip T. Church",
      "Eric J. Ek",
      "Patricia R. Bourdeau",
      "Matthew P. Fowler",
      "Lindsay C. McClure",
      "Ashley J. Bryant",
    ],
    data: [-5, 4, 148, -50, 2, -2],
  };

  const stackedData: stackedProps = {
    title: "Daily Log Count by User",
    categories: [
      "Phillip T. Church",
      "Eric J. Ek",
      "Patricia R. Bourdeau",
      "Matthew P. Fowler",
      "Lindsay C. McClure",
      "Ashley J. Bryant",
    ],
    data: [[5, 3, 4, 7, 2],[2, 2, 3, 2, 1]]
  };
  
  return (
    <div className="App">
      <Chart {...chartData}/>
      <NagetiveBar {...negativeData}/>
      <StackedBar {...stackedData} />
    </div>
  );
}

export default App;
