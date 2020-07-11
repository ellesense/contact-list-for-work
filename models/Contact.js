const mongoose = require("mongoose");
const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    // collection name
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  city: {
    type: String,
  },
  stateOrProvince: {
    type: String,
  },
  email: {
    type: String,
  },
  pickUpInstruction: {
    type: String,
  },
  deliveryInstruction: {
    type: String,
  },
  notes: {
    type: String,
  },
  deliveryInstruction: {
    type: String,
  },
  type: { type: String, default: "personal" },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("contact", ContactSchema);
