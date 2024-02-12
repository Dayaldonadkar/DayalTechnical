const contactMessage = require("../model/contactSchema");

const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Check if required fields are filled
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new contact message document
    const newMessage = await contactMessage.create({
      name,
      email,
      message,
    });

    res
      .status(200)
      .json({ message: "Message sent successfully", data: newMessage });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while processing your request" });
  }
};

module.exports = { contact };
