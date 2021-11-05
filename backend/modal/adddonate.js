const mongoose = require("mongoose");

const plasmaDonnerschema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },
  bloodgrp: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  dateofnegative: {
    type: String,
  },
  dateofpositive: {
    type: String,
  },
  state: {
    type: String,
  },

  Date: {
    type: String,
  },
});

module.exports = mongoose.model("plasmadonner", plasmaDonnerschema);
