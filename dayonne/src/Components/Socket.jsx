import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function Socket() {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("random-data", (msg) => {
      setData((prev) => [msg, ...prev].slice(0, 10)); // keep last 10
    });

    return () => {
      socket.off("random-data");
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Live Random Data</h2>

      {data.length === 0 ? (
        <p>Waiting for data...</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Value: {item.value} | Time: {item.timestamp}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Socket;
