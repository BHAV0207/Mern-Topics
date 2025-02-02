const express = require('express');
const http =  require('http');
const {Server} = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server , {
    cors : {
      origin : '*',
      methods : ['GET' , 'POST']
    }
})

const users = {};

io.on("connection" , (socket) => {
    console.log("User Connected : " , socket.id);

    socket.on("joinRoom" , (roomName) => {
      socket.join(roomName);
      console.log("User Joined Room : " , roomName);
    })

    socket.on("privateMessage" , ({recipientId , message}) => {
      io.to(recipientId).emit("privateMessage" , {
        senderId : socket.id,
        message
      })
      console.log(`📩 Private message from ${socket.id} to ${recipientId}: ${message}`);
    })

    socket.on("sendMessageToRoom", ({ roomName, message }) => {
      io.to(roomName).emit("message", {
        sender: socket.id,
        message,
      });
      console.log(`📢 Message sent to room ${roomName}: ${message}`);     
    });

    socket.on("registerUser", (username) => {
      users[socket.id] = username;
      console.log(`✅ User registered: ${username} (ID: ${socket.id})`);
    });

    socket.on("disconnect", () => {
      console.log(`❌ User disconnected: ${socket.id}`);
      delete users[socket.id];
    });
})


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 WebSocket server running on port ${PORT}`);
});

