const mongoose = require("mongoose");

const bedsSchema = new mongoose.Schema({
  hospital_name: String,
  location: String,
  total_free_bed: String,
  without_ventilator_bed: String,
  with_ventilator_bed: String,
  non_critical_bed: String,
  hospital_no: String,
});

module.exports = mongoose.model("bed", bedsSchema);
