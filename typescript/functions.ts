  function addTwo(num){
    return num + 2;
  }

  addTwo("hello");

  // now ts will cause a problem here because we are passing a string to a function that is expecting a number
  //  so we need to add the type of the variable that is being passed to the function
  function addTwo2(num: number){
    return num + 2;
  }
  addTwo2(5);
  //  now ts will not cause a problem here because we are passing a number to a function that is expecting a number

  const addTwo3 = (num: number) => {
    return "hello"
  }

  addTwo3(5);
  //  here we are passing a number to a function that is returning string and we want number aas an output so what we can do is type inference again for the return type of the function
  const addTwo4 = (num: number): number => {
    return num + 2;
  }
  addTwo4(5);

const info = (name : string , age : number = 20) => {
  return `My name is ${name} and I am ${age} years old`;
}

info("John");

// if in arguments we dint want to give the age then we can give it a default value of 20 in the paramenters and if we want to pass the age then we can pass it as well


const consoleErr = (err: string):void => {
  console.log(err);
}

consoleErr("This is an error");

// here we are not returning anything from the function so we can use void as the return type of the function

export {}