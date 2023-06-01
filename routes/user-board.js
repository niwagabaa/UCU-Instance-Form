const express = require('express')
const router = express.Router()

// const User = require("../models/user");
// const bcrypt = require("bcryptjs");

//dashboard for users route
router.get('/', (req, res) => {
  res.render("report-dashboard")
})

//exprting the files to server.js
module.exports = router
