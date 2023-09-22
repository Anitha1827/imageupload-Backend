const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgpath: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
  },
});

// create a model
const users = new mongoose.model("user", userSchema);
module.exports = users;
