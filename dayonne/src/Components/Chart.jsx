import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("random-data", (msg) => {
      setData((prev) =>
        [
          ...prev,
          {
            value: Number(msg.value),
            time: msg.timestamp,
          },
        ].slice(-10),
      );
    });

    return () => {
      socket.off("data stopped");
    };
  }, []);
  return (
    <>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#888478" />
      </LineChart>
    </>
  );
};

export default Chart;
