const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://jainbhav0207:JxJYzw1UhbsJ5rh9@cluster0-todo.z46yd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-toDo"
  )
  .then(() => console.log("connection successful"))
  .catch((err) => console.error("unsuccessful", err));

//schema

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

// model
const Todo = mongoose.model("Todo", todoSchema);

//Crud

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: "error message", error });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      completed : req.body.completed
    });

    const saveToDo = await newTodo.save();
    res.status(201).json(saveToDo);
  } catch (err) {
    res.status(500).json({ message: "error", error });
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const updatedToDo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, completed: req.body.completed },
      { new: true }
    );
    if (!updatedToDo) {
      return res.status(404).json({ message: "todo not found" });
    }
    res.json(updatedToDo);
  } catch (err) {
    res.status(500).json({ message: "id not found ", err });
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const deleteById = await Todo.findByIdAndDelete(req.params.id);
    if(!deleteById){
      res.status(404).json({message : "id not found"});
    }
    res.json({message : "To do deleted " ,deleteById});
  } catch (err) {
    res.status(500).json({ message: "id not found ", err });
  }
});

const port = 3000;
app.listen(port , () => console.log("port working"))


// JWT, encrpyt, bycrypt,  Protected Routes , OAuth;