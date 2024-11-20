import { postCollection } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "DELETE" || req.method == "GET") {
    try {
      const id = req.method === "DELETE" ? req.body : req.query._id;

      await postCollection.deleteOne({
        _id: new ObjectId(id as string),
      });

      res.status(200).json("삭제완료");
    } catch (error) {
      res.status(500);
    }
  }
}
