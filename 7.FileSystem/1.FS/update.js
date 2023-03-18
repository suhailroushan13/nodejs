import fs from "fs";

let updatedData = "\nI am Cool";
fs.appendFile("./writeFile.txt", updatedData, (err) => {
  if (err) console.log(err);
  else console.log("Updated Completed");
});
