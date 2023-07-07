//  Student’s Name: Hin Wa Chan
//  StudentID: 301251828
//  Date: 7 Jul 2023

const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
},{
  timestamps: {
      createdAt: 'createdDate',
      updatedAt: 'updatedDate'
    }
});


module.exports = mongoose.model("Contact", contactSchema);
