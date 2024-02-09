const User = require("../model/userSchema");

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

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "User already Exist" });
    }

    const userNameExist = await User.findOne({ username: username });
    if (userNameExist) {
      return res.status(400).json({ message: "Username already exist" });
    }

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

module.exports = { home, register };
