import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const socket = io("http://localhost:3000");

const LiveBarChart = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    socket.on("random-data", (msg) => {
      setdata((prev) =>
        [
          ...prev,
          {
            value: Number(msg.value),
            timestamp: msg.timestamp,
          },
        ].slice(-10),
      );
    });

    return () => {
      socket.off("random-data");
    };
  }, []);

  return (
    <>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" fill="#00f" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#f00" />
      </BarChart>
    </>
  );
};

export default LiveBarChart;
