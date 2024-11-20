export const dynamic = "force-dynamic";

import axios from "axios";
import { WithId } from "mongodb";
import Post from "@/models/post";
import ListItem from "./ListItem";


export default async function List() {
  const readPostList = async (): Promise<WithId<Post>[]> => {
    try{
      const response = await axios.get("http://localhost:3000/api/test");
      return response.data;
    } catch (e) {
      if(e instanceof Error) throw new Error(e.message);
      else throw new Error("알 수 없는 오류가 발생했습니다.");
    }
  }

  const posts: WithId<Post>[] = await readPostList();

  return (
    <div className="list-bg">
      <ListItem posts={posts} />
    </div>
  );
}
