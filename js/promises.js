//using callback
/*
function setTime(fn , duration){
  setTimeout(fn, duration);
}

setTime(function(){
  console.log('Hello');
}, 10000);
*/




//Asynch using callback
/*
function doSummation(a , b , callnack){
  return callnack(a) + callnack(b);
}

function square(a){
  return a*a;
}
function cube(a){
  return a*a*a;
}

const val = doSummation(2, 3, square);
const val2 = doSummation(2, 3, cube);

console.log(val);
console.log(val2);

*/



//promise approach

function mySetTiemout(duration){
  let p = new Promise(function(resolve){
    setTimeout(resolve, duration);
  })
  return p;
}

let ans = mySetTiemout(1000);
ans.then(function(){
  console.log('Hello');
});


// 
const successfulPromise = new Promise((resolve, reject) => {
  console.log("called from inside");
  setTimeout(resolve , 1000)
});

successfulPromise.then(() => (console.log("hello world")));

