const { Schema, model } = require("mongoose");

const User = new Schema({
  username: String,
  email: String,
  age: Number,
});

const UserModel = model("User", User);
module.exports = UserModel;
