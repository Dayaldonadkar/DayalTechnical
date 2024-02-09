const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, saltRound); // await bcrypt.hash
    user.password = hashPassword;
    console.log(user.password);
    console.log(hashPassword);
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
