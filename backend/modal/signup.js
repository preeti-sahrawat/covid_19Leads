const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

module.exports = mongoose.model("signup", signupSchema);
