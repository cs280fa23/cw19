import { Button } from "@/components/ui/button";
import { ChatBubbleIcon, HeartIcon } from "@radix-ui/react-icons";
import PostActions from "./post-actions";
import { useState } from "react";

const PostFooter = ({ postId }: { postId: string }) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="flex justify-around mb-4">
      <Button variant="ghost" size="sm" onClick={() => setLikes(likes + 1)}>
        <HeartIcon className="w-5 h-5" />
        {likes > 0 && <sup>{likes}</sup>}
      </Button>
      <Button variant="ghost" size="sm">
        <ChatBubbleIcon className="w-5 h-5" />
      </Button>
      <PostActions postId={postId} />
    </div>
  );
};

export default PostFooter;
