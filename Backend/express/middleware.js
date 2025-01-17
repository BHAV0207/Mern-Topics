const express = require("express");
const app = express();

app.use(express.json());

// a dumb way of doing authentication without middlewares//
/*
app.get("/" , function(req, res){
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const pass = req.headers.pass;

  if(username != "john" || pass != "1234"){
    res.status(403).json({
      msg : "invalid credentials"
    })
    return;
  }   

  if(kidneyId != 1 && kidneyId != 2){
    res.status(400).json({
      msg: "wrong input"
    })

    return;
  }
  res.send("your heart is healthy");
  })

  */

// a better way of doing authentication with middlewares //

function userMiddleware(req, res, next) {
  if (userName != "bhav" && pass != "pass") {
    res.status(403).json({
      msg: "incorrect input",
    });
  } else {
    next();
  }
}


function kidneyMiddleware(req , res , next){
  if(kidneyId !== 1 && kidneyId !== 2){
    res.status(403).json({
      msg : "Incorrect input"
    })
  }else{
    next();
  }
}

app.get("/" , userMiddleware , kidneyMiddleware , function(req , res){
  //do something with kidney here 

  res.send("you good buddy");
})
app.listen(3000);
