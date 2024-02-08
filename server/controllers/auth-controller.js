const home = async (req, res) => {
  try {
    res.send("hi from controller auth");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res.send("hi from register auth");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
