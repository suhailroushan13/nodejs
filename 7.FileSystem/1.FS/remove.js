import fs from "fs";

// fs.rmdir("./suhail", (err) => {
//   if (err) console.log(err);
//   else console.log("Removed Successfully");
// });

fs.readdir("./22", (err, data) => {
  if (err) console.log(err);
  else data.forEach((x) => console.log(x));
});
