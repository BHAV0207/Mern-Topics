const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
// const authMiddleware = require("../MiddleWare/authMiddleware");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 5000;
const JWT_SECRET = process.env.JWT_SECRET;

mongoose
  .connect(
    "mongodb+srv://jainbhav0207:JxJYzw1UhbsJ5rh9@cluster0-todo.z46yd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-toDo"
  )
  .then(() => console.log("success"))
  .catch((err) => console.log("error connnecting to dataBase"));


  //schema
  const userSchema = new mongoose.Schema({
    username :{type : String , required : true , unique:true},
    password :{type: String , required : true}
  })

  // model
  const User = mongoose.model("User" , userSchema);


  const AuthMiddleWare = (req, res , next) => {
    const token = req.header("Authorization");
    if(!token) res.status(500).json({message : "enter a valid token"})

    try{
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded.id;

      next();
    }catch(err){
      res.status(401).json({message : err.message})
    }
  }

  //register

  app.post('/auth/register' , async (req, res) => {
    const {username , password, role} = req.body;

    try{
      const existingUser =await User.findOne({username});
      if(existingUser) res.status(500).json({message : "user already exist"});

      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password ,salt);

      const newUser = new User({username , password: hashedPass, role});
      await newUser.save();

      res.status(200).json({message  : "user registered successfully"})
      console.log(User.role);

    }catch(err){
      res.status(500).json({message : "error registering"})
    }
  })

  // login
  app.post('/auth/login' , async (req , res) => {
    const {username , password} = req.body;

    try{
      const user =await User.findOne({username})
      if(!user) res.status(500).json({message :"user does not exist"});
  
      const pass = await bcrypt.compare(password , user.password);
      if(!pass) res.status(500).json({message :"password does not match"});
  
      const token = jwt.sign({id: user.id } , JWT_SECRET , {expiresIn : "1h"} )
      console.log(token);
      console.log(user.id);
      res.status(200).json({token})
    }
    catch(err){
      res.status(500).json({message :"err"})
    }
  })

  // protected routes

  app.get('/protected/dashboard' , AuthMiddleWare , (req ,res) => {
    res.status(200).json({ message: `Welcome user with ID: ${req.user}` });
  })

  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
