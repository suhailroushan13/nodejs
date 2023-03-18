import fs from "fs";

let folderName = "SUHAIL";

fs.mkdir(folderName, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder Created Sucessfully");
  }
});

fs.rmdir(folderName, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder Deleted Sucessfully");
  }
});

fs.rename(folderName, "ROUSHAN", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Renamed Hogaya");
  }
});
