import { postCollection } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const newDocument = {
      title: req.body.title,
      content: req.body.content,
    };

    await postCollection.updateOne(
      { _id: new ObjectId(req.body._id) },
      { $set: newDocument }
    );

    return res.redirect(302, "/list");
  }
}
