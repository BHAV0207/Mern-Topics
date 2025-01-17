const express = require('express');
const bcrypt =  require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const router = express.Router();

//Registration 

router.post('/register' ,async (req , res) => {
  const {username , password} = req.body;

  try{
    const existingUser = await User.findOne({username});
    if(existingUser) res.status(400).json({message : "user already exist"});

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password , salt);

    const newUser = new User({username : username , password : hashedPass});
    await newUser.save();

    res.status(200).json({message : "new user registered successfully"})
    
  }
  catch(err){
    res.status(500).json({message : "error saving"})
  }

})


//login

router.post('/login', async (req ,res) => {
  const {username , password} = req.body;

  try{
    const user = await User.findOne({username});
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const pass = await bcrypt.compare(password , user.password);
    if (!pass) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({id : user.id} , process.env.JWT_SECRET , {expiresIn : '1h'} )
    res.status(200).json({ token });
  }
  catch(err){
    res.status(500).json({ error: "Internal server error" });
  }
})

module.exports = router;


