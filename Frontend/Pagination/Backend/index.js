const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import CORS middleware
const app = express();
app.use(express.json());
app.use(cors());

// Define the User schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://jainbhav0207:b43Z7OmiRTYHWKVr@cluster0.7bwni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
).then(() =>{
  console.log("connexcyt")
});

// POST route to add multiple users
app.post("/users", async (req, res) => {
  const users = req.body; // Expecting an array of users

  if (!Array.isArray(users) || users.length === 0) {
    return res.status(400).json({ message: "Please provide an array of users" });
  }

  try {
    // Validate each user object
    const validUsers = users.filter(
      (user) => user.name && user.email && user.age
    );

    if (validUsers.length !== users.length) {
      return res.status(400).json({ message: "Some users have missing fields" });
    }

    // Check for duplicate emails
    const emails = validUsers.map((user) => user.email);
    const existingUsers = await User.find({ email: { $in: emails } });

    if (existingUsers.length > 0) {
      return res.status(400).json({
        message: "Some emails already exist in the database",
        duplicates: existingUsers.map((user) => user.email),
      });
    }

    // Insert all users
    const createdUsers = await User.insertMany(validUsers);

    res.status(201).json({
      message: "Users created successfully",
      users: createdUsers,
    });
  } catch (err) {
    res.status(500).json({ message: "Error creating users", error: err });
  }
});


// pagination
app.get("/users", async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const skip = (page - 1) * limit;

  try {
    const users = await User.find().skip(skip).limit(limit);
    const totalCount = await User.countDocuments();

    res.json({
      totalUsers: totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      users,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
});

// Start the server
app.listen(2500, () => {
  console.log("Server is running on http://localhost:2500");
});
