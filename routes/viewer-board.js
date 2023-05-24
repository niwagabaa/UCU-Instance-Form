const express = require('express')
const router = express.Router()

//login page route
router.get('/', (req, res) => {
  res.render("incidentView")
})


//exprting the files to server.js
module.exports = router
