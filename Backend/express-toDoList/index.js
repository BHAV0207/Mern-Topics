const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

const readTasks = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

const writeTasks = (tasks) => {
  fs.writeFileSync("db.json", JSON.stringify(tasks, null, 2) , 'utf-8');
};

app.listen(PORT, () => {
  console.log("hello world");
});

//CRUD OPERATIONS

// POST
app.post("/tasks", (req, res) => {
  const { title , completed } = req.body;

  if (!title) {
    return res.status(400).json({ error: "title is required " });
  }

  const tasks = readTasks();
  const newTask = { id: Date.now(), title, completed};
  tasks.push(newTask);

  writeTasks(tasks);

  res.status(201).json(newTask);
});

// GET
app.get("/tasks", (req, res) => {
  const tasks = readTasks();
  res.status(200).send(tasks);
});

// PUT
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex === -1) {
    res.status(400).json({ error: "id does not exist" });
  }

  tasks[taskIndex] = { ...tasks[taskIndex], title, completed };
  writeTasks(tasks);

  res.status(200).json(tasks[taskIndex]);
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const tasks = readTasks();
  const filterTask = tasks.filter((task) => task.id !== parseInt(id));

  if(filterTask.length === tasks.length){
    return res.status(400).json({error: "id does not exist"});
  }

  writeTasks(filterTask);
  res.status(200).json({message : "task deleted successfully"});

});

// http://localhost:3000/Route/:params?query

// MongoDB and CRUD with mongoDB 
// CORS, issues, use
// try catch and error handling