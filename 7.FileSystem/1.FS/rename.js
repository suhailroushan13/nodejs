import fs from "fs";

// suhail.txt renamed to renamed.txt
fs.rename("./suhail.txt", "renamed.txt", (err) => {
  if (err) console.log(err);
  else console.log("Renamed Done ");
});
