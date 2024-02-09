const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cpassword: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
});

const User = new mongoose.model("Userlogin", userSchema);
