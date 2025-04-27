//  here we will talk more sabout arrays and how to use them in typescript 


const superHeroes: Array<string> = [] // this is one way of declaring a specific typer of array in ts 
const superHeroes2: string[] = [] // this is another way of declaring a specific type of array in ts

// here we are creating an array of strings 

type User = {
  name: string , 
  email: string
}

const userArray : User[] = [] // here we are creating an array of objects with the type User

userArray.push({name: "John", email: "bhav"}) // here we are pushing an object of type User in the array
// console.log(userArray);


const mixedArray: (string | number)[] = [] // here we are creating an array of mixed types
mixedArray.push("John")
mixedArray.push(20)
// mixedArray.push(true) // here we are trying to push a boolean value in the array and ts will throw an error

export{}