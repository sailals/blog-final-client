import React, { useEffect } from "react";
import Post from "../Post/Post";

function Posts({ posts }) {
  return (
    <>
      <div className="rows mt-5 g-2 ">
        {posts.map((value, index) => {
          return <Post key={index} post={value} />;
        })}
      </div>
    </>
  );
}

export default Posts;
