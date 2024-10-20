import { useRef, useEffect } from "react";
import { createChart } from "lightweight-charts";
import "./App.css";

const TradingViewContainer = () => {
  const chartContainer = useRef(null);
  const chartContainer1 = useRef(null);

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
      width: chartContainer.current.clientWidth,
      height: 400,
    };
    const chart = createChart(chartContainer.current, chartProperties);
    const newSeries = chart.addAreaSeries({
      topColor: "rgba(33, 194, 140, 0.56)",
      bottomColor: "blue",
      lineColor: "gray",
    });

    newSeries.setData(initialData);
    chart.timeScale().setVisibleRange({
      from: "2018-12-22", // Start date
      to: "2018-12-31", // End date
    });
    return () => {
      chart.remove();
    };
  }, []);

  useEffect(() => {
    const chartOptions = {
      layout: {
        textColor: "#ddd",
        background: { type: "solid", color: "#222" },
      },
      width: chartContainer1.current.clientWidth,
      height: 400,
    };

    const chart = createChart(chartContainer1.current, chartOptions);
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });
    const data = [
      { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
      { open: 9.55, high: 10.3, low: 9.42, close: 9.94, time: 1642514276 },
      { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
      { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
      { open: 9.51, high: 10.46, low: 9.1, close: 10.17, time: 1642773476 },
      { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
      { open: 10.47, high: 11.39, low: 10.4, close: 10.81, time: 1642946276 },
      { open: 10.81, high: 11.6, low: 10.3, close: 10.75, time: 1643032676 },
      { open: 10.75, high: 11.6, low: 10.49, close: 10.93, time: 1643119076 },
      { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 },
    ];

    candlestickSeries.setData(data);
    chart.timeScale().setVisibleRange({
      from: 1642427876, // Start timestamp for the month
      to: 1643205476, // End timestamp for the month
    });

    chart.timeScale().fitContent();
    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div ref={chartContainer}></div>
      <div ref={chartContainer1}></div>
    </div>
  );
};

export default TradingViewContainer;
