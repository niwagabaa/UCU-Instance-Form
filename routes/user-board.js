const express = require('express')
const router = express.Router()

//dashboard for users route
router.get('/', (req, res) => {
  res.render("report-dashboard")
})

//exprting the files to server.js
module.exports = router
