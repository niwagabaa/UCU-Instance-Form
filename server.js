// server.js

console.log('May Node be with you')

//Requiring express dependency on the server
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
//Flash messages to show that a user/report has been added to the database
// const flash = require('express-flash-message')
const flash = require('express-flash');
const session = require('express-session')
const dotenv = require('dotenv')
dotenv.config();

//MongoDB Schemas
const Schema = mongoose.Schema

const app = express()

//Body BodyParsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Express session
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    }
  })
)
// Flash messages
// app.use(flash({ sessionKeyName: 'express-flash-message'}));
app.use(flash());

//Choosing our view engine which is ejs and location
app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
//hookup express layouts templeting engine
app.set('layout', 'layouts/layouts')
app.use(expressLayouts)



//Static files
app.use(express.static("public"));
app.use('css', express.static(__dirname + 'public/css'))
app.use('js', express.static(__dirname + 'public/js'))
app.use('images', express.static(__dirname + 'public/images'))

//setting up routers to the different pages
const indexRouter = require('./routes/index')
const registerRouter = require('./routes/register')
const adminDashboardRouter = require('./routes/admin-board')
const reportFormRouter = require('./routes/writeIncident')
const dashboardRouter = require('./routes/user-board')
const viewBoardRouter = require('./routes/viewer-board')
const reportViewRouter = require('./routes/view-form')

// //Function to connect mongoose to mongodb
// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('"n" done connect'))
.catch(err => console.log(err));


//Controllers to the views

app.use('/', indexRouter)
app.use('/register', registerRouter)
app.use('/admin-dashboard', adminDashboardRouter)
app.use('/report-an-incident', reportFormRouter)
app.use('/dashboard', dashboardRouter)
app.use('/reports', viewBoardRouter)
app.use('/report-statement', reportViewRouter)


//Handle 404 error
app.get("*", (req,res) => {
  res.status(404).render('404')
});



//A server that the browser can connect using the express "listen" method
app.listen(3000, function () {
  console.log('listening on 3000')
})
