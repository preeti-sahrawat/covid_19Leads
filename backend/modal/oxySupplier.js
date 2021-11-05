const mongoose = require("mongoose");

const oxysupschema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
  state: {
    type: String,
  },
  website: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  Date: {
    type: String,
  },
});

module.exports = mongoose.model("oxygensuppliers", oxysupschema);
