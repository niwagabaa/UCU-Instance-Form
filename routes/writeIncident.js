const express = require('express')
const router = express.Router()
const Report = require('../model/Issues')
const mongoose = require('mongoose')


//js
//Post Request that handles Register
// const registerUser = (req, res) => {
//   const { title, exampleDatepicker1, reporter, summary, timeline, root, impact, resolution, recommendation, conclusion } = req.body;
//   if (!title || !exampleDatepicker1 || !reporter || !summary || !timeline || !root || !impact || !resolution || !recommendation || !conclusion) {
//     console.log("Fill empty fields");
//   }
//   //Confirm Passwords
//   if (password !== confirm) {
//     console.log("Password must match");
//   } else {
//     //Validation
//     User.findOne({ email: email }).then((user) => {
//       if (user) {
//         console.log("email exists");
//         res.render("register", {
//           name,
//           email,
//           password,
//           confirm,
//         });
//       } else {
//         //Validation
//         const newUser = new User({
//           name,
//           email,
//           location,
//           password,
//         });
//         //Password Hashing
//         bcrypt.genSalt(10, (err, salt) =>
//           bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) throw err;
//             newUser.password = hash;
//             newUser
//               .save()
//               .then(res.redirect("/login"))
//               .catch((err) => console.log(err));
//           })
//         );
//       }
//     });
//   }
// };


//report form route
router.get('/', (req, res) => {
  res.render("incident-report")
})

//user registration route(POST request)Create new user
router.post('/', async (req, res) => {

  console.log(req.body);

  const newReport = new Report({
    title: req.body.title,
    exampleDatepicker1: req.body.exampleDatepicker1,
    reporter:req.body.reporter,
    summary: req.body.summary,
    timeline: req.body.timeline,
    root: req.body.root,
    impact: req.body.impact,
    resolution: req.body.resolution,
    recommendation: req.body.recommendation,
    conclusion: req.body.conclusion,

  });
  try {
    await Report.create(newReport);

    res.redirect('/');
  } catch (e) {
    console.log(e);
  }
})

//incident registration route(POST request)Create new incident
router.post('/', (req, res) => {

  console.log(req.body);
  res.render("incident-report")

})


//exporting the files to server.js
module.exports = router
