import { postCollection } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    if (req.body.title == "" || req.body.content == "") {
      return res.status(500).json("빈 형식이 있습니다.");
    }
    try {
      await postCollection.insertOne(req.body);
      res.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
