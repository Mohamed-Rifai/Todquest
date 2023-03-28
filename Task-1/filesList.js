const fs = require("fs");
const path = require("path");

const directory = path.join(__dirname);
 

fs.readdir(directory, (err, files)=> {
  if (err) {
    console.log("some error occurred: " + err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});
