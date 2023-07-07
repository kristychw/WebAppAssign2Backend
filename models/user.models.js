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