const mongoose = require("mongoose");

const plasmarequestschema = new mongoose.Schema({
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
  
  timestamp: {
    type: String,
  },

  bloodgrp: {
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

module.exports = mongoose.model("plasmarequest", plasmarequestschema);
