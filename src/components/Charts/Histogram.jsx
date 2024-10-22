import { useRef, useEffect } from "react";
import { createChart } from "lightweight-charts";

const Histogram = () => {
  const chartContainer = useRef(null);
  useEffect(() => {
    const initialData = [
      { value: 1, time: 1642425322 },
      { value: 8, time: 1642511722 },
      { value: 10, time: 1642598122 },
      { value: 20, time: 1642684522 },
      { value: 3, time: 1642770922, color: "red" },
      { value: 43, time: 1642857322 },
      { value: 41, time: 1642943722, color: "red" },
      { value: 43, time: 1643030122 },
      { value: 56, time: 1643116522 },
      { value: 46, time: 1643202922, color: "red" },
    ];

    const chartProperties = {
      layout: {
        textColor: "#ddd",
        background: { type: "solid", color: "#222" },
      },
      width: 600,
      height: 300,
    };
    const chart = createChart(chartContainer.current, chartProperties);
    const histogramSeries = chart.addHistogramSeries({ color: "#26a69a" });

    histogramSeries.setData(initialData);

    chart.timeScale().fitContent();
    return () => {
      chart.remove();
    };
  }, []);
  return (
    <div>
      <h3>Histogram</h3>
      <div ref={chartContainer}></div>
    </div>
  );
};

export default Histogram;
