interface User {
  readonly _id: number;
  name: string;
  email: string;
  salary?: number;
  startGame: () => string;
  getOut: (out: string, score: number) => number;
}

// interface is a way to define the structure of an object in typescript you can think of it as a blueprint for the object

interface User {
  address: string;
}

//  if we want to extend the interface then we can do the above thing that is writing the interface again and adding the new properties to it



interface Admin extends User {
  role: string;
  isAdmin: boolean;
}
//  here we are creating a new interface that is extending the User interface and adding new properties to it
//  so admin will have all the properties of User and also the new properties that we are adding to it

const User1: User = {
  _id: 1,
  name: "John",
  address: "123 Main St",
  email: "",
  startGame: () => {
    return "Game Started";
  },
  getOut: (gameStatus: string, score: number) => {
    return score;
  }
};
 