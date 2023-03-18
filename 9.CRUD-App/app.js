import http from "http";
import url from "url";
import fs from "fs/promises";
import getRoute from "./routes/getRoute.js";
import postRoute from "./routes/postRoute.js";

const port = 8000;

let main = async () => {
  let server = http.createServer(async (req, res) => {
    let method = req.method;

    let data = await fs.readFile("./data/movies.json", "utf-8");
    req.movies = JSON.parse(data);

    switch (method) {
      case "GET":
        getRoute(req, res);
        break;
      case "POST":
        postRoute(req, res);
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
