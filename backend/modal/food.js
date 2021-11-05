const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  Name_of_organisation: String,
  location: String,
  Date: String,
  Time: String,
  Phone_Number: String,
});

module.exports = mongoose.model("food", foodSchema);
