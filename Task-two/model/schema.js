const mongoose = require("mongoose");



const WorksnapsTimeEntrySchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  },
  { timestamps: true }
);


const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    default: "",
  },
  lastName: {
    type: String,
    trim: true,
    default: "",
  },
  displayName: {
    type: String,
    trim: true,
  },
  municipality: {
    type: String,
  },
});

const WorksnapsTimeEntry = mongoose.model("WorksnapsTimeEntry",WorksnapsTimeEntrySchema);
const Student = mongoose.model("Student", StudentSchema);

module.exports = { WorksnapsTimeEntry, Student };
