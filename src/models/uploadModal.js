// userModel.js

const mongoose = require('mongoose');

const pdfFile = new mongoose.Schema({

  userfile:{ type: String, required: true },

});

const FileUser = mongoose.models.users || mongoose.model("userfile" , pdfFile)

module.exports = FileUser;
