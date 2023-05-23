import React from "react";

export default function Comments({ post }) {
  console.log(post);
  return (
    <div>
      {post.Comments.map((comment) => (
        <div>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
}
