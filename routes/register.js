const express = require('express')
const router = express.Router()
const User = require('../model/User')
//requiring bcrypt to hash the passwords
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose')
// //BodyParsing
// app.use(express.urlencoded({extended: false}));



//user registration route(GET request)
router.get('/', (req, res) => {
  res.render("register")
})

//user registration route(POST request)Create new user
router.post('/', async (req, res) => {

  console.log(req.body);
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const newUser = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email1:req.body.email1,
    role: req.body.role,
    department: req.body.department,
    type: req.body.type,
    password: hashedPassword,

  });
  try {

    await User.create(newUser);

    res.redirect('/admin-dashboard');
  } catch (e) {
    console.log(e);
  }
})

//exporting the files to server.js
module.exports = router
