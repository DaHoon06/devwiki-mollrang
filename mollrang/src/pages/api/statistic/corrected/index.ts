import Cookies from "cookies";
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res);
  const userId = cookies.get("user");

  if (req.method !== "GET")
    return res.status(405).json({ message: "Only GET requests allowed" });
  const data = fs.readFileSync("public/mock-data/statistics/corrected.json", {
    encoding: "utf-8",
  });
  const dataToJson = JSON.parse(data);
  return res.status(200).json(dataToJson);
}