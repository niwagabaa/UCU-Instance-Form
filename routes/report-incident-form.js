const express = require('express')
const router = express.Router()

//report form route
router.get('/', (req, res) => {
  res.render("incident-report")
})


//exprting the files to server.js
module.exports = router
