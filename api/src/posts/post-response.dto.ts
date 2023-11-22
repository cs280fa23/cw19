export class PostResponseDto {
  id: string;
  content: string;
  timestamp: Date;
  image?: string;
  likeCount: number;
  commentCount: number;
  userId: number;
}
