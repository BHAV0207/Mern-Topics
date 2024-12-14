//M1
function getting(){
  fetch("https://fakerapi.it/api/v1/persons")
  .then((response) => {
     return response.json()
  })
  .then((data) => {
      console.log(data);
    })
}


//M2

async function getting2(){
  const response = await fetch("https://fakerapi.it/api/v1/persons");
  const ans = await response.json();

  console.log(ans);
}

getting();