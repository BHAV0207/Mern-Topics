let globalVar = "I'm a global variable";

function parentFunction() {
  let parentVar = "I'm a parent function variable";
  function childFunction() {
    let childVar = "I'm a child function variable";

    console.log(globalVar);
    console.log(parentVar);
    console.log(childVar);
  }

  childFunction();
}

parentFunction();
