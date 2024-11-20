import { postCollection } from "@/utils/database";
import { NextApiResponse } from "next";

export default async function handler(res: NextApiResponse) {
  const result = await postCollection.find().toArray();
  return res.status(200).json(result);
}
