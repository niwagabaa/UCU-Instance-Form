const express = require('express')
const router = express.Router()

//user registration route
router.get('/', (req, res) => {
  res.render("register")
})

//exporting the files to server.js
module.exports = router
