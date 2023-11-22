import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./create-post.dto";
import { PostResponseDto } from "./post-response.dto";
import { UpdatePostDto } from "./update-post.dto";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { UserId } from "src/decorators/user-id.decorator";
import { PostOwnershipGuard } from "src/guards/post-owner.guard";
import { UserService } from "src/user/user.service";

type PostResponseWithPagination = {
  filter?: string;
  search?: string;
  data: PostResponseDto[];
  pagination: {
    limit: number;
    offset: number;
  };
};

@Controller("posts")
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly userService: UserService,
  ) {}

  @Get()
  async findAll(
    @Query("limit") limit: number = 10,
    @Query("offset") offset: number = 0,
    @Query("search") search: string,
    @Query("username") username?: string,
  ): Promise<PostResponseWithPagination> {
    let userId: number | undefined;

    if (username) {
      const user = await this.userService.findOne(username);
      if (!user) {
        throw new NotFoundException(`User with username ${username} not found`);
      }
      userId = user.id;
    }

    const posts = await this.postsService.findAll(
      limit,
      offset,
      search,
      userId,
    );
    return {
      filter: username,
      search,
      pagination: {
        limit,
        offset,
      },
      data: posts.map((post) => {
        delete post.userId;
        return post;
      }),
    };
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<PostResponseDto> {
    const post = await this.postsService.findOne(id);
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    delete post.userId;
    return post;
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createPostDto: CreatePostDto,
    @UserId() userId: number,
  ): Promise<PostResponseDto> {
    const post = await this.postsService.create(createPostDto, userId);
    delete post.userId;
    return post;
  }

  @UseGuards(JwtAuthGuard, PostOwnershipGuard)
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<PostResponseDto> {
    const post = await this.postsService.update(id, updatePostDto);
    delete post.userId;
    return post;
  }

  @UseGuards(JwtAuthGuard, PostOwnershipGuard)
  @Delete(":id")
  async remove(
    @Param("id") id: string,
  ): Promise<{ statusCode: number; message: string }> {
    await this.postsService.remove(id);
    return {
      statusCode: 200,
      message: "Post deleted successfully",
    };
  }
}
