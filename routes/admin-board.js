const express = require('express')
const router = express.Router()
const User = require('../model/User')
const Issues = require('../model/Issues')
const mongoose = require('mongoose')

// const User = require("../models/user");
// const bcrypt = require("bcryptjs");

//admin dashboard route
router.get('/', async (req, res) => {

  try {
    const users = await User.find({}).limit(100);
    const reports = await Issues.find({}).limit(1000);
    const reportNumber = await Issues.count();
    const userNumber = await User.count();
    res.render("admin-dashboard", { users, reports, reportNumber, userNumber })
  } catch (e) {
    console.log(e);
  }

})


//exporting the files to server.js
module.exports = router
 
