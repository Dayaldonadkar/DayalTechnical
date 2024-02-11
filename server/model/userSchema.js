const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// userSchema.pre("save", async function (next) {
//   const user = this;
//   if (!user.isModified("password")) {
//     return next();
//   }
//   try {
//     const saltRound = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash(user.password, saltRound); // await bcrypt.hash
//     user.password = hashPassword;
//     console.log(user.password);
//     console.log(hashPassword);
//     next();
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });

// userSchema.pre("save", async function (next) {
//   const user = this;
//   if (!user.isModified("password")) {
//     return next();
//   }
//   try {
//     const hashSalt = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash(user.password, hashSalt);
//     user.password = hashPassword;
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// });
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const hashSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, hashSalt);
    user.password = hashPassword;
    next();
  } catch (error) {
    console.log(error);
  }
});
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        id: this._id.toString(),
        email: this.email,
      },
      process.env.jwtKey
    );
  } catch (error) {
    console.log(error);
  }
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
