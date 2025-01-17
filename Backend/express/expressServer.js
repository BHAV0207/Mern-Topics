const express = require("express");

const app = express();

function sum(a){
  let ans = 0;
  for(let i = 0 ;i<a ;i++ ){
    ans += i;
  }

  return ans;
}

app.get("/" , function(req , res ){
  const a = req.query.a;
  const ans = sum(a);

  res.send("your ans is " + ans);
})


app.listen(3000);