import express from 'express';
import {createServer} from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socketIo) => {
    console.log("A new client connected");
    socketIo.on("disconnect", () => {
      console.log("disconnected");
    });
    socketIo.on("get-geolocation", (data) => {
      console.log(data);
      io.emit("send-geolocation", data);
    });
  });

  server.listen(3000, () => {
    console.log("Server started");
  });
