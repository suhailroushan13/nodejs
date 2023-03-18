import readFile from "./app.js";

readFile("app.js")
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
