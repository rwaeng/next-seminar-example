"use client";

import Link from "next/link";

interface ListItemType {
  posts: {
    _id: string;
    title?: string;
  }[];
}

export default function ListItem({ posts }: ListItemType) {
  return (
    <div>
      {posts?.map((_, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={"/detail/" + posts[i]._id}>
              <h4>{posts[i].title}</h4>
            </Link>
            <Link href={"/edit/" + posts[i]._id}>✏️</Link>
            <span
              onClick={(e) => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: posts[i]._id,
                })
                  .then((r) => r.json())
                  .then(() => {
                    const target = e.target as HTMLElement;
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.opacity = "0";
                      setTimeout(() => {
                        parent.style.display = "none";
                      }, 1000);
                    }
                  });
              }}
            >
              🗑️
            </span>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
