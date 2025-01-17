const express = require("express");

const app = express();

app.use(express.json());

const user = [{
  name :"john" ,
  kidneys : [{
    healthy : false
  }]
}];

app.get("/" , function(req , res ){
  //logic to check if the user has healthy kidneys or not 
  const userKidneys  = user[0].kidneys;
  const noOfKidneys = userKidneys.length;
  let noOfHealthyKidneys = 0;
  for(let i = 0 ; i<noOfKidneys ; i++){
    if(userKidneys[i].healthy){
      noOfHealthyKidneys++;
    }
  }

  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;


  res.json({
    noOfKidneys : noOfKidneys,
    noOfHealthyKidneys : noOfHealthyKidneys,
    noOfUnhealthyKidneys : noOfUnhealthyKidneys,
  })
})


app.post("/" , function(req , res ){
  const isHealthy = req.query.isHealthy;

  user[0].kidneys.push({
    healthy : isHealthy
  })
  res.json({
    msg : "done"
  })
})

app.put("/" , function(req , res ){
  for(let i = 0  ;i<user[0].kidneys.length ; i++){
    user[0].kidneys[i].healthy = true;
  }
  res.json({
    msg : "updated"
  });
})

app.delete("/" , function(req , res ){
  // add logic to delete all unhealthy kidneys
})
app.listen(3000);
