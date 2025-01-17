const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 3000);
});

promise.then((message) => console.log(message));
