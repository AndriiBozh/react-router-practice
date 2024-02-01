import { useLoaderData } from "react-router-dom";

const Post = () => {
  const post = useLoaderData();

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
