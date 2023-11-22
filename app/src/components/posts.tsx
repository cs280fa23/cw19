import Post from "./post";
import useQueryPosts from "@/hooks/use-query-posts";

const Posts = () => {
  const { posts } = useQueryPosts();

  return (
    <div className="">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
