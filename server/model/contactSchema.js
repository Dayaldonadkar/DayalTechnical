const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

const contactMessage = new mongoose.model("contactMessage", contactSchema);

module.exports = contactMessage;
