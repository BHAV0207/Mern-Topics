//promises

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


// async/ await 

// const fetchh = async () => {
//   try{  
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json();
//     console.log(data)
//   }
//   catch(err){
//     console.log(err)
//   }
// } 
// fetchh();

