import { useRef, useEffect } from "react";
import { createChart } from "lightweight-charts";

const AreaSeries = () => {
  const chartContainer = useRef(null);
  useEffect(() => {
    const initialData = [
      { time: "2018-12-22", value: 32.51 },
      { time: "2018-12-23", value: 31.11 },
      { time: "2018-12-24", value: 27.02 },
      { time: "2018-12-25", value: 27.32 },
      { time: "2018-12-26", value: 25.17 },
      { time: "2018-12-27", value: 28.89 },
      { time: "2018-12-28", value: 25.46 },
      { time: "2018-12-29", value: 23.92 },
      { time: "2018-12-30", value: 22.68 },
      { time: "2018-12-31", value: 22.67 },
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
    const newSeries = chart.addAreaSeries({
      topColor: "rgba(33, 194, 140, 0.56)",
      bottomColor: "blue",
      lineColor: "gray",
    });

    newSeries.setData(initialData);
    chart.timeScale().setVisibleRange({
      from: "2018-12-22",
      to: "2018-12-31",
    });
    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div>
      <h3>Area</h3>
      <div ref={chartContainer}></div>
    </div>
  );
};

export default AreaSeries;
