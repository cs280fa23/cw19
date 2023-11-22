import { formatTimestamp } from "@/lib/utils";

type PostHeaderProps = {
  name: string; // author's display name
  username: string; // author's username
  timestamp: string; // post's timestamp
};

const PostHeader = ({ name, username, timestamp }: PostHeaderProps) => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{`@${username}`}</p>
      </div>
      <p className="text-sm text-muted-foreground">
        {formatTimestamp(timestamp)}
      </p>
    </div>
  );
};

export default PostHeader;
