const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const complaintSchema = new Schema({
  SparePart: {
    type: String,
    require: true,
  },
  Quantity: {
    type: String,
    require: true,
  },
  Description: {
    type: String,
    require: true,
  },
  BranchName: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("complaints", complaintSchema);
