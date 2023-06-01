const express = require('express')
const router = express.Router()

// const User = require("../models/user");

//login page route
router.get('/', (req, res) => {
  res.render("view-dashboard")
})


//exprting the files to server.js
module.exports = router
