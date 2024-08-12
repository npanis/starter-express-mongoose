// Create a schema - model the data and create a representation of the data
const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: String,
  email: String,
});

module.exports = mongoose.model("User", schema);