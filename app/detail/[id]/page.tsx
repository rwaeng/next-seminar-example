import { postCollection } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function Detail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = await postCollection.findOne({ _id: new ObjectId(id) });

  if (!post) {
    return (
      <div>
        <h4>게시글을 찾을 수 없습니다.</h4>
      </div>
    );
  }

  return (
    <div>
      <h4>상세 페이지</h4>
      <h4>{post?.title}</h4>
      <h4>{post?.content}</h4>
    </div>
  );
}
