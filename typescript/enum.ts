const enum HttpStatus {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  BadRequest = 400, 
  Unauthorized = 401,
}

const statusOk = HttpStatus.OK;
const statusCreated = HttpStatus.Created;

console.log(statusOk); // 200
console.log(statusCreated); // 201

//  we  can assigne values to the enums or we can also use the default values
//  if we dont assign any value to the enum then ts will assign the default values to the enums
//  the default values are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

//  if we assign a value to the enum then ts will assign the next value to the next enum
//  for example if we assign 1 to the first enum then ts will assign 2 to the next enum and so on
