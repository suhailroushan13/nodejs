import fs from "fs/promises";

let main = async () => {
  try {
    console.clear();
    console.log("I am Main Function Started");
    let data = "I am Creating File";
    // Creating a File
    await fs.writeFile("./createFile.txt", data);
    // Reading a File
    let out = await fs.readFile("./createFile.txt", "utf-8");
    console.log(out, "I Just Created a File ");
    // Updating a File
    await fs.appendFile("./createFile.txt", "\nI am Updating Data");
    // Reading a Updated File
    let out1 = await fs.readFile("./createFile.txt", "utf-8");
    console.log(out1, "I am Whole Data");

    // await fs.rename("./createFile.txt", "RenamedFile.txt");
    // console.log("Delete Doing Now");

    // await fs.unlink("./createFile.txt");
  } catch (error) {
    console.log(error);
  }
};

main();
