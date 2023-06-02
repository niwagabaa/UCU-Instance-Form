const express = require('express')
const router = express.Router()

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

//incident registration route(POST request)Create new incident
router.post('/', (req, res) => {

  console.log(req.body);
  res.render("incident-report")

})


//exporting the files to server.js
module.exports = router
