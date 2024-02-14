const User = require("../model/userSchema");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
  try {
    res.send("hi from controller auth");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    // check fields are filled or not
    if (!username || !email || !password || !phone) {
      return res.status(401).send({ error: "All fields are required" });
    }

    // const userExist = await User.findOne({ email: email });
    // if (userExist) {
    //   return res.status(400).json({ message: "User already Exist" });
    // }

    // const userNameExist = await User.findOne({ username: username });
    // if (userNameExist) {
    //   return res.status(400).json({ message: "Username already exist" });
    // }

    const userCreated = await User.create({
      username,
      email,
      password,
      phone,
    });
    // const userExist = user.find({});

    await console.log("user saved in database");
    res.json({
      message: "User created successfully",
      token: await userCreated.generateToken(),
      id: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (!userExist) {
      res.status(401).json({ message: "Username not exist" });
    } else {
      const user = await bcrypt.compare(password, userExist.password);
      if (user) {
        res.status(200).json({
          message: "login successfully",
          token: await userExist.generateToken(),
          id: userExist._id.toString(),
        });
      } else {
        res.status(401).json({ message: "Password is incorrect" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// const contact = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     console.log(name, email, message);
//     const Message = await contactMessage.create({
//       name,
//       email,
//       message,
//     });
//     await console.log(contactMessage);
//     res.status(200).json({ message: "message sent successfully" });
//   } catch (error) {
//     console.log(error);
//   }
// };
// const contact = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // Check if required fields are filled
//     if (!name || !email || !message) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Create a new contact message document
//     const newMessage = await contactMessage.create({
//       name,
//       email,
//       message,
//     });

//     res
//       .status(200)
//       .json({ message: "Message sent successfully", data: newMessage });
//   } catch (error) {
//     console.log(error);
//     res
//       .status(500)
//       .json({ message: "An error occurred while processing your request" });
//   }
// };

module.exports = { home, register, login };
