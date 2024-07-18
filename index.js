const express = require('express');
const app = express();

//app.use(express.static(__dirname + '/public'));

const server = require('http').Server(app);
const io = require('socket.io')(server, {
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

