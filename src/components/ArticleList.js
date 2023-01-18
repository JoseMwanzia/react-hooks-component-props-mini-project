import React from "react";
// import blogData from '../data/blog';
import Article from "./Article";

function ArticleList({ posts }) {
  const eachPost = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        preview={post.preview}
        date={post.date}
      />
    );
  });

  return <main>{eachPost}</main>;
}

export default ArticleList;
