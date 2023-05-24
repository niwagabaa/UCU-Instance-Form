const express = require('express')
const router = express.Router()

//admin dashboard route
router.get('/', (req, res) => {
  res.render("admin-dashboard")
})


//exporting the files to server.js
module.exports = router
