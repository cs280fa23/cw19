import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

type PostAvatarProps = {
  imageUrl?: string; // author's profile image
  displayName: string; // author's display name
};

function PostAvatar({ imageUrl, displayName }: PostAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={imageUrl} />
      <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
    </Avatar>
  );
}

export default PostAvatar;
