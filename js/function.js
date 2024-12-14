
function add(a, b) {
  return a + b;
}

function power(x) {
  return x * x;
}

function pythagorean(addFunc, powerFunc, a, b) {
  return Math.sqrt(addFunc(powerFunc(a), powerFunc(b)));
}

let a = 3;
let b = 4;
let result = pythagorean(add, power, a, b);
console.log(result); 
