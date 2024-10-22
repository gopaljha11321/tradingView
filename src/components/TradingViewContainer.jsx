import AreaSeries from "./Charts/AreaSeries";
import Candlestick from "./Charts/Candlestick";
import BarSeries from "./Charts/BarSeries";
import Histogram from "./Charts/Histogram";
import "./App.css";

const TradingViewContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <AreaSeries />
      <Candlestick />
      <BarSeries />
      <Histogram />
    </div>
  );
};

export default TradingViewContainer;
