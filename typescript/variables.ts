let greetings :string = "Hello, World!";

console.log(greetings);   


//  the above method is goddd if you always want to show and check the type of the variable
//  But ts is smart enough to infer the type of the variable

let greetings2 = "Hello, World!";
console.log(greetings2);
// this is called type inference 
// you explisitely dont nees to show the type of the variable ts is samart enough to understand the type of the variable


// any 
let hello;

function greet(){
  return "Hello, World!";
}

hello = greet();

// in the above example we are not sure what the type of the variable is that will be returned so ts by default considers it as any type ie any type can come here 
//  to avoid such cases here we can explicitely add the types when declaring the varibles 

let hello2 :string ;
function greet2(){
  return "hello , world";
}

hello2 = greet2();


export{}

