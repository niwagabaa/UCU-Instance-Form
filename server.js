// server.js
console.log('May Node be with you')

//Requiring express dependency on the server
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express()


//Body parser before the crud handlers
app.use(bodyParser.urlencoded({ extended: true }))

//Function to connect mongoose to mongodb
const url = 'mongodb+srv://power:VX5s4RpSdeJPEaHD@cluster0.nxgekpj.mongodb.net/?retryWrites=true&w=majority'

async function connect(){
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

//CRUD handlers
//Handle the get request with an endpoint and callback function
app.get('/', (req,res) => {
  res.sendFile (__dirname + "/index.html")
})


app.post('/dashboard', (req,res) => {
  console.log(req.body)
})


//A server that the browser can connect using the express "listen" method
app.listen(3000, function () {
  console.log('listening on 3000')
})
