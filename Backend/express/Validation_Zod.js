const express = require("express");

const app = express();
const zod  = require("zod");
app.use(express.json());
//lets suppose we have an array of numbers as  input , now to validate them lets use zod
const schema = zod.array(zod.number());

//zod schema if we have an object which has an email a pass and a country name 

const schema2 =  zod.object({
  email : zod.string(),
  password : zod.string(),
  country : zod.literal('IN').or(zod.literal('US')) 
})

app.post("/" ,function(req, res){
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys); // this will check if the input is valid according to the schema  ie it is a array of numbers , if yes it will return true else false.

  if(!response){
    res.status(403).json({
      msg : "wrong input"
    })
  }
  else{
    res.send("success");
  }
})









app.listen(3000);