const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  exampleDatepicker1: {
    type: Date,
    default: Date.now,
  },
  reporter: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
 timeline: {
   type: String,
   default: "Engeneering and Technology",
   },
   root: {
     type: String,
     required: true,
   },
   impact: {
     type: String,
     required: true,
   },
   resolution: {
     type: String,
     required: true,
   },
   recommendation: {
     type: String,
     required: true,
   },
   conclusion: {
     type: String,
     required: true,
   },

});
const Report = mongoose.model("Report", ReportSchema);
module.exports = Report;
