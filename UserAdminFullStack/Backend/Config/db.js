const mongoose = require("mongoose");

const mongooseDb = async () => {
  mongoose
    .connect(
      "mongodb+srv://jainbhav0207:J8FVz1BFe1mN4WOv@cluster0.elj15.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("connection Successful"))
    .catch(() => console.log("Connection Failed"));
};

module.exports = mongooseDb;
