import fs from "fs";

let data = "I am Data in write Files";
fs.writeFile("writeFile.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Write Successfully Done");
  }
});

fs.readFile("./writeFile.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
