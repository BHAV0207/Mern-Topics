const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server , {
  cors : {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/realtime-grid', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const gridSchema = new mongoose.Schema({
  cells: [[String]], // 8x8 grid with cell states
});

const Grid = mongoose.model('Grid', gridSchema);

// Initialize grid state in the database
const initializeGrid = async () => {
  const existingGrid = await Grid.findOne();
  if (!existingGrid) {
    const newGrid = new Grid({
      cells: Array(8).fill(Array(8).fill('white')),
    });
    await newGrid.save();
  }
};

initializeGrid();

// Handle web sockets connection
io.on('connection', (socket) => {
  console.log(`User connected with id: ${socket.id}`);

  // Send the current grid state to the client
  socket.on('request-grid', async () => {
    const grid = await Grid.findOne();
    socket.emit('update-grid', grid.cells);
  });

  // Handle cell click events
  socket.on('cell-click', async ({ x, y, color }) => {
    const grid = await Grid.findOne();
    grid.cells[x][y] = color;
    await grid.save();
    io.emit('update-grid', grid.cells);
  });

  // Handle clear all event
  socket.on('clear-grid', async () => {
    const grid = await Grid.findOne();
    grid.cells = Array(8).fill(Array(8).fill('white'));
    await grid.save();
    io.emit('update-grid', grid.cells);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected with id: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 2000;
server.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`);
});
