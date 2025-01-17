const tabel = (number) => {
  let num = number;
  return function() {
    for(let i =1 ;i<=10 ;i++){
      console.log(num*i);
    }
  }
}

const num1 = tabel(2);
const num2 = tabel(5);

num1();
num2();