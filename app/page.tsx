import { connectDB } from "@/utils/database";
import Link from "next/link";

export default async function Home() {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="navbar">
      <Link href="/" className="logo">
        🏠
      </Link>
      <Link href="/list">List</Link>
    </div>
  );
}
