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

const socket = io("http://65.0.147.141:4000", {
  transports: ["websocket"],
  reconnection: true,
});

const Charts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const topic = "companyone/d1/topic2|m/s";

    socket.emit("subscribeToTopic", topic);

    socket.on("liveMessage", (data) => {
      const value = Number(data?.message?.message?.message);

      setData((prev) =>
        [
          ...prev,
          {
            value,
            time: new Date().toLocaleTimeString(),
          },
        ].slice(-10),
      );
      console.log(value);
    });

    return () => {
      socket.off("liveMessage");
    };
  }, []);

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
};

export default Charts;
