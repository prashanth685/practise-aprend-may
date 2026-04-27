const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

// IMPORTANT: enable CORS for React
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("Socket.IO server is running");
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  const interval = setInterval(() => {
    const randomData = {
      value: (Math.random() * 100).toFixed(2),
      timestamp: new Date().toLocaleTimeString(),
    };

    // send to this client
    socket.emit("random-data", randomData);

    // OR send to all clients:
    // io.emit("random-data", randomData);
  }, 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
    clearInterval(interval);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
