// userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName:{ type: String, required: true },
  userEmail:{ type: String, required: true },
  userPassword:{ type: String, required: true },
});

const User = mongoose.models.users || mongoose.model("users" , userSchema)

module.exports = User;
