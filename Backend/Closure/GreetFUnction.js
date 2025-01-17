const greet = (name) => {
  let names = `${name}`;

  return function () {
    const greeting = "hello " + names;
    console.log(greeting);
  }
}


const name1 = greet("bhav");
const name2 = greet("ansh");

name1();
name2();
name1();
name1();