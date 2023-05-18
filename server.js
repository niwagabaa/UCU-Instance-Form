// server.js
console.log('May Node be with you')

//Requiring express dependency on the server
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//MongoDB Schemas
const Schema = mongoose.Schema

const app = express()

//Choosing our view engine which is ejs and location
app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
//hookup express layouts
app.set('layout', 'layouts/layouts')
app.use(expressLayouts)

//Static files
app.use(express.static("public"));
app.use('css', express.static(__dirname + 'public/css'))
app.use('js', express.static(__dirname + 'public/js'))
app.use('images', express.static(__dirname + 'public/images'))

//setting up routers to the different pages
const indexRouter = require('./routes/index')


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
//app.get('/', (req,res) => {
//  res.sendFile (__dirname + "/views/index.html")
//})


//app.post('/dashboard', (req,res) => {
//  console.log(req.body)
//})

app.use('/', indexRouter)

//A server that the browser can connect using the express "listen" method
app.listen(3000, function () {
  console.log('listening on 3000')
})
