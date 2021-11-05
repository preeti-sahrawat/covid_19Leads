const mongoose = require("mongoose");

const helpDeskschema = new mongoose.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
  state: {
    type: String,
  },
  category: {
    type: String,
  },
  timestamp:{
    type: String,
  },
  Date:{
    type: String,
  }
  
});

module.exports = mongoose.model("helpdesks", helpDeskschema);
