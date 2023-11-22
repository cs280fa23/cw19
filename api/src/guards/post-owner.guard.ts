import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";

import { RequestWithUser } from "src/decorators/user-id.decorator";
import { PostsService } from "src/posts/posts.service";

@Injectable()
export class PostOwnershipGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private postService: PostsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Get the user id from the request object
    const user = (request as RequestWithUser).user;
    const userId = user.userId;
    // The JWT strategy will throw an error if it fails to validate the token

    // Get the post id from the request params
    const postId = request.params.id;

    // If postId is not provided
    if (!postId) {
      throw new BadRequestException("Invalid or missing post ID");
    }

    const post = await this.postService.findOne(postId);

    // If post does not exist
    if (!post) {
      throw new NotFoundException(`Post with ID ${postId} not found`);
    }

    // Check if the deck belongs to the user
    return post.userId == userId;
  }
}
