const promise =  async () => {
  const message = await new Promise((resolve , reject) => {
    setTimeout(() => {
      resolve("Hello world")
    } , 3000)
  })

  console.log(message);
}

promise();