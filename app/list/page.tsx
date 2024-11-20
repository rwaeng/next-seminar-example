export const dynamic = "force-dynamic";

import ListItem from "./ListItem";
import { postCollection } from "@/utils/database";

export default async function List() {
  const posts = await postCollection.find().toArray();

   const plainPosts = posts.map((post) => ({
     ...post,
     _id: post._id.toString(),
   }));

  return (
    <div className="list-bg">
      <ListItem posts={plainPosts} />
    </div>
  );
}
