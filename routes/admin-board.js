const express = require('express')
const router = express.Router()

// const User = require("../models/user");
// const bcrypt = require("bcryptjs");

//admin dashboard route
router.get('/', (req, res) => {
  res.render("admin-dashboard")
})


//exporting the files to server.js
module.exports = router
