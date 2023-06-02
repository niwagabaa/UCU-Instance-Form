const express = require('express')
const router = express.Router()

// //BodyParsing
// app.use(express.urlencoded({extended: false}));
//
// //js
// //Post Request that handles Register
// const registerUser = (req, res) => {
//   const { fname, lname, email1, role, department, type, password, date } = req.body;
//   if (!fname || !lname || !email1 || !role || !department || !type || !password || !date) {
//     console.log("Fill empty fields");
//   }
//   //Confirm Passwords
//   if (password !== confirm) {
//     console.log("Password must match");
//   } else {
//     //Validation
//     User.findOne({ email1: email1 }).then((user) => {
//       if (user) {
//         console.log("email exists");
//         res.render("register", {
//           fname,
//           lname,
//           email1,
//           role,
//           department,
//           type
//         });
//       } else {
//         //Validation
//         const newUser = new User({
//           fname,
//           lname,
//           email1,
//           role,
//           department,
//           type,
//           password,
//           date
//         });
//         //Password Hashing
//         bcrypt.genSalt(10, (err, salt) =>
//           bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) throw err;
//             newUser.password = hash;
//             newUser
//               .save()
//               .then(res.redirect("/register"))
//               .catch((err) => console.log(err));
//           })
//         );
//       }
//     });
//   }
// };


//user registration route(GET request)
router.get('/', (req, res) => {
  res.render("register")
})

//user registration route(POST request)Create new user
router.post('/', (req, res) => {

  console.log(req.body);
  res.render("register")
  
})

//exporting the files to server.js
module.exports = router
