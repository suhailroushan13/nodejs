//Method 3 util
import fs from "fs";
import util from "util";

var readFile = util.promisify(fs.readFile);
var writeFile = util.promisify(fs.writeFile);
var deleteFile = util.promisify(fs.unlink);

readFile("sample.txt")
  .then((data) => {
    return writeFile("UPPERCASE.txt", data.toString().toUpperCase());
  })
  .then(() => {
    console.log("File Created Successfully");
    return deleteFile("sample.txt");
  })
  .then(() => {
    console.log("File is deleted successfully");
  })
  .catch((err) => {
    console.log(err);
  });
