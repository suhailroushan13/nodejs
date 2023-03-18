import fs from "fs";
//Method 2 Promises
//Step 1 : Convert existing callback to a promise
function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
function writeFile(fileName, fileData) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, fileData, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
function deleteFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.unlink(fileName, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
readFile("sample.txt")
  .then((data) => {
    return writeFile("UPPERCASE.txt", data.toString());
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
