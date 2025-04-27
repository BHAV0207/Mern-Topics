let score : number | string  = 100; // here we are creating a variable that can be either a number or a string
score = "100"; // here we are assigning a string value to the variable
console.log(score); // here we are printing the value of the variable

type User = {
  name: string;
  age: number;
}


type Admin = {
  name: string;
  role: string;
}

let info : User | Admin = {name: "John", age: 20} // here we are creating a variable that can be either a User or an Admin
info = {name: "John", role: "admin"} // here we are assigning an Admin object to the variable
console.log(info); // here we are printing the value of the variable


//  union can also be used with function parameters 
function hello(id : number | string){
  id = 1; // here we are assigning a number value to the variable
  console.log(id); // here we are printing the value of the variable
  id = "1"; // here we are assigning a string value to the variable
  console.log(id); // here we are printing the value of the variable
}

hello(3)
export{}