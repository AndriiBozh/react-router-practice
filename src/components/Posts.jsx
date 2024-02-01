import { Link, useLoaderData } from "react-router-dom";

import "./Posts.css";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div className="posts-container">
      <ul className="posts-grid-container">
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} <Link to={post.id}>Read more...</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
