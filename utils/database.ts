import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URL;
const DB_NAME = process.env.NEXT_PUBLIC_DB_NAME;
const COLLECTION_POST_NAME: string =
  process.env.NEXT_PUBLIC_COLLECTION_POST_NAME || "";

declare global {
  var _mongo: Promise<MongoClient> | undefined;
}

if (!url) {
  throw new Error("The MONGODB_URL environment variable is not defined");
}

let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}

const db = (await connectDB).db(DB_NAME);
const postCollection = db.collection(COLLECTION_POST_NAME);

export { connectDB, postCollection };
