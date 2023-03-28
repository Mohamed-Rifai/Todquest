const { Student, WorksnapsTimeEntry } = require("./model/schema");
const mongoose = require('mongoose')



// Connect to the database
mongoose.connect("mongodb://0.0.0.0:27017/Todquest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const student = new Student({
  firstName: "Mohamed",
  lastName: "Rifai",
  displayName: "Mohamed Rifai",
  municipality: "UK",
});

student.save()
  .then(() => {
    const timeEntry = new WorksnapsTimeEntry({
      student: student._id,
    });
    return timeEntry.save();
  })
  .then(() => {
    return WorksnapsTimeEntry.find({}).populate("student")
  })
  .then((timeEntries) => {
    timeEntries.forEach((timeEntry) => {
      console.log("Student: "+ timeEntry?.student?.displayName);
      console.log("Entry Date: "+ timeEntry.createdAt);
    
    });
  })
  .catch((err) => {
    console.log(err);
  });


  