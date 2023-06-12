const express = require('express')
const router = express.Router()
const passport = require ('passport')
const bcrypt = require ('bcryptjs')

// const User = require("./model/User");
// const bcrypt = require("bcryptjs");
//login page route
router.get('/', (req, res) => {
  res.render("index")
})

router.post('/', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/',
  failureFlash: true
}))


//exprting the files to server.js
module.exports = router
