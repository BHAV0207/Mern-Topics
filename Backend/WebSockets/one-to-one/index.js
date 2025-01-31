const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server , {
  cors : {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// handle web sockets connection
io.on('connection' , (socket) => {
  console.log(`User connected with id: ${socket.id}`);

  socket.on('message' , (data) => {
    console.log(data);
    io.emit('message' , data);
  });

  socket.on('disconnect' , ()=>{
    console.log(`User disconnected with id: ${socket.id}`);
  })
})


const PORT = process.env.PORT || 2000;
server.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`);
})
