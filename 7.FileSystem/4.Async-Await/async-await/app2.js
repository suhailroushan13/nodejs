import fs from "fs/promises";

let main = async () => {
  try {
    console.clear();
    // console.log("Hello I am Suhail");
    let fileName = "writeFileUsingPromises.txt";
    let data = "Hello I am Tony Stark";

    // fs.writeFile(fileName, data, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("Done");
    //   }
    // });

    // await fs.writeFile(fileName, data);
    // console.log("File Write Huvi");

    // let read = await fs.readFile(fileName, "utf-8");
    // console.log(read);
    // console.log("File Read Huvi");

    //  await fs.unlink(fileName);
    // console.log("File Delete Huvi");

    // console.log("Created");

    // console.log("Hello I am 2nd");

    // fs.mkdir(folderName, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("Folder Created Sucessfully");
    //   }
    // });

    // await fs.rmdir("TEST");

    let read = await fs.readFile("./intro.txt","utf-8");
    console.log(read);
  } catch (error) {
    console.log(error);
  }
};

main();
