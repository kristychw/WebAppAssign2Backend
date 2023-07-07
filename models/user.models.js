//  Student’s Name: Hin Wa Chan
//  StudentID: 301251828
//  Date: 7 Jul 2023

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String },
  phone: { type: String }
},{
  timestamps: {
      createdAt: 'createdDate',
      updatedAt: 'updatedDate'
    }
});


module.exports = mongoose.model("User", userSchema);
