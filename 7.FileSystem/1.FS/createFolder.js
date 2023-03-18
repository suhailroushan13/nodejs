import fs from "fs";

// Created Folder Using FS
fs.mkdir("./suhail", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Created Succesfully");
  }
});
