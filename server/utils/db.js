const mongoose = require("mongoose");
const URI = process.env.mongodbUri;
console.log(URI);

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection to the database successful");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
