import fs from "fs";

fs.readFile("./city.json", "utf-8", (err, data) => {
  if (err) console.log(err);
  else {
    let data1 = JSON.parse(data);
    data1.forEach((x) => {
      if (x.country == "India") {
        if (x.subcountry == "Telangana") {
          if (x.name == "Hyderabad") {
            console.log(x);
          }
        }
      }
    });
  }
});
