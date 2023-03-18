import fs from "fs/promises";
import url from "url";
export default async function deleteRoute(req, res) {
  try {
    let clientUrl = req.url
      .split("/")
      .filter((e) => e !== "")
      .join("/");
    let firstPart = clientUrl.substr(0, 10);
    console.log(firstPart);
  } catch (error) {
    console.log(error);
  }
}
