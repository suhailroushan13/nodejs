import http from "http";
import url from "url";
import fs from "fs/promises";
import getRoute from "./routes/getRoute.js";

const port = 8000;

let main = async () => {
  let server = http.createServer(async (req, res) => {
    let method = req.method;

    let data = await fs.readFile("./movies.json", "utf-8");
    req.movies = JSON.parse(data);
    switch (method) {
      case "GET":
        getRoute(req, res);
        break;
      case "POST":
        res.end("Its a POST");
        break;
      case "PUT":
        res.end("Its a PUT");
        break;
      case "DELETE":
        res.end("Its a DELETE");
        break;
      default:
        res.end(JSON.stringify({ msg: "Method Not Allowed" }));
        break;
    }
  });

  server.listen(port, () => {
    console.log(`Server Listening at Port ${port}`);
  });
};

main();
