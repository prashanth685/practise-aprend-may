import React, { useEffect, useRef } from "react";
import { createChart, LineSeries } from "lightweight-charts";

const Trade = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: 600,
      height: 300,
    });

    const lineSeries = chart.addSeries(LineSeries);

    lineSeries.setData([
      { time: "2024-01-01", value: 100 },
      { time: "2024-01-02", value: 110 },
      { time: "2024-01-03", value: 105 },
      { time: "2024-01-04", value: 120 },
    ]);

    return () => chart.remove();
  }, []);

  return <div ref={chartContainerRef} />;
};

export default Trade;
