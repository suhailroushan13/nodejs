import fs from "fs";

// Create a File Using FS

let fileName = "writefile.txt";
let data = "I am Suhail Roushan";

//
// fs.(what you want to do)
fs.writeFile(fileName, data, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Created Sucessfully");
  }
});

fs.readFile(fileName, "utf-8", (err, output) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(output);
     console.log("File READ");
     
  }
});

fs.unlink(fileName, (err, output) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Deleted Sucessfully");
  }
});
