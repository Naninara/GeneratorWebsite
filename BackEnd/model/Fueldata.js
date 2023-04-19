const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fuelSchema = new Schema({
  date: {
    type: Date,
    require: true,
  },
  fuel: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("fuelData", fuelSchema);
