import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import Cookies from "cookies";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res);
  const userId = cookies.get("user");

  if (req.method === "GET") {
    const data = fs.readFileSync("public/mock-data/days.json", {
      encoding: "utf-8",
    });

    const dataToJson = JSON.parse(data);
    return res.status(200).json(dataToJson);
  }
}
