const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email1: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
 department: {
   type: String,
   default: "Engeneering and Technology",
   },
   type: {
     type: String,
     required: true,
   },
   password: {
     type: String,
     required: true,
   },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  }
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
