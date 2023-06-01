const express = require('express')
const router = express.Router()

// const User = require("./model/User");
// const bcrypt = require("bcryptjs");
//login page route
router.get('/', (req, res) => {
  res.render("index")
})


//exprting the files to server.js
module.exports = router
