const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String || Number,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
