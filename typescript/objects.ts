//  type alises

type User = {
  name: string;
  age: number;
  email: string;
};

//  here we are creating a type alias for the object that we are going to use in the code
//  suppose if there are several functions that are using the same object then we can create a type alias for the object and use it in all the functions as paraameters

function createUser(user: User): void {
  console.log(user);
}

function createUser2(user: User): User {
  // console.log(user);
  return user;
}

createUser2({ name: "John", age: 20, email: "" });
createUser({ name: "bhav", age: 20, email: "" });





// here we will talk about the optional readonly properties in the object
//  suppose if we want to make the email property optional then we can do that by adding ? after the property name
//  and if we want to make the property readonly then we can do that by adding readonly before the property name

type user2 = {
  readonly _id: number;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  salary?: number;
};


let myUser : user2 = {
  _id: 1,
  name: "John",
  age: 20,
  email: "",
  isActive: true,
}

let myUser2 : user2 = {
  _id: 1,
  name: "John",
  age: 20,
  email: "",
  isActive: true,
  salary: 1000  
}

myUser2.salary = 2000;
myUser2._id = 2; // here we are trying to change the value of the readonly property and ts will throw an error


//  here we are creating a new object that is extending the user2 object and adding new properties to it 
type userExtraDetail = user2 & {
  address: string;
  phone: number;
}

let myUser3 : userExtraDetail = {
  _id: 1,
  name: "John",
  age: 20,
  email: "",
  isActive: true,
  salary: 1000,
  address: "123 Main St",
  phone: 1234567890
}





export {};
