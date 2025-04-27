//  type alises
//  here we are creating a type alias for the object that we are going to use in the code
//  suppose if there are several functions that are using the same object then we can create a type alias for the object and use it in all the functions as paraameters 
function createUser(user) {
    console.log(user);
}
function createUser2(user) {
    return user;
}
createUser2({ name: "John", age: 20, email: "" });
