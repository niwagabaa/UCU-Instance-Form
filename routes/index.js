const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
//  res.sendFile (__dirname + "./views/index.html")
  res.render("index")
})

//exprting the file to server.js
module.exports = router
