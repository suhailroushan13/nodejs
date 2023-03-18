import fs from "fs";
// delete2.txt is deleted
fs.unlink("./delete2.txt", (err) => {
  if (err) console.log(err);
  else console.log("Sucessfully Deleted");
});
