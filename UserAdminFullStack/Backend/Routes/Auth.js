const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser)
      res
        .status(400)
        .json({ message: "username taken add a different username" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(200).json({ message: "user created successfully" });
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
});


router.post('/login' ,  async (req, res) => {
  const {email , password } = req.body;

  try{
    const existingUser =await  User.findOne({email});
    if(!existingUser) return res.status(404).json({message : "the user does not exist "});
  
    const pass = await bcrypt.compare(password , existingUser.password );
    if(!pass) return res.status(500).json({message: "password is incorrect "});
  
    const token  = jwt.sign({id: existingUser._id , role : existingUser.role } , process.env.JWT_SECRET, { expiresIn: "1h" }) 
    res.status(200).json({token , role : existingUser.role});
  }catch(err){
    res.status(500).json({message : "error" , err});
  }
})


//middleWare

const verifyTokenMiddleWare = (req, res , next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}


//admin protected routes 

router.get("/admin" , verifyTokenMiddleWare , (req, res) => {
  if(req.user.role !== "admin") return res.status(403).json({ message: "Access denied" });

  res.json({ message: "Welcome to the admin page" });
})


//user protected routes

router.get("/user" , verifyTokenMiddleWare , (req,res) => {
  if(req.user.role !== "user")  return res.status(403).json({ message: "Access denied" });

  res.json({message : "welcome to th user page"})
})

module.exports = router;