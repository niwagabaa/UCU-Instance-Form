const express = require('express')
const router = express.Router()
const Issues = require('../model/Issues')
const mongoose = require('mongoose')

// const User = require("../models/user");

//login page route
router.get('/', async (req, res) => {
  try {
    const issue = await Issues.findOne({ _id: req.params.id })
    res.render("incidentView", {issue})
  } catch (e) {
    console.log(e);
  }
})


//exprting the files to server.js
module.exports = router
