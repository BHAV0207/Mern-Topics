const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://jainbhav0207:JxJYzw1UhbsJ5rh9@cluster0-todo.z46yd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-toDo"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("we are doomed"));

app.use("/auth", require("./Routes/auth"));
app.use("/protected", require("./Routes/ProtectedRoutes"));

app.listen(PORT, () => console.log("port started"));
