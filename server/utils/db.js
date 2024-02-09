const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017";

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection to the database successful");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
