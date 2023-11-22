import PostAvatar from "./post-avatar";
import PostHeader from "./post-header";
import PostFooter from "./post-footer";
import type { PostWithUserData } from "@/lib/types";

const Post = ({ post }: { post: PostWithUserData }) => {
  const { id, content, user, timestamp } = post;

  // The code below uses Optional Chaining (?.) and Nullish Coalescing (??)
  const displayName = user?.displayName ?? "Unknown";
  const userName = user?.userName ?? "Unknown";
  const avatar = user?.avatar;

  return (
    <div className="flex border-b border-slate-400">
      <div className="p-4">
        <PostAvatar imageUrl={avatar} displayName={displayName} />
      </div>
      <div className="w-full pt-4 pr-4">
        <PostHeader
          name={displayName}
          username={userName}
          timestamp={timestamp}
        />
        <div className="my-4">{content}</div>
        <PostFooter postId={id} />
      </div>
    </div>
  );
};

export default Post;
