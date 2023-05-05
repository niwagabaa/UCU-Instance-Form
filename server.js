// server.js
console.log('May Node be with you')

//Requiring express dependency on the server
const express = require('express')
const app = express()


//Handle the get request with an endpoint and callback function
app.get('/', (req,res) => {
  res.sendFile (__dirname + "/index.html")
})



//A server that the browser can connect using the express "listen" method
app.listen(3000, function () {
  console.log('listening on 3000')
})
