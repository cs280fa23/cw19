import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "./post.entity";
import { CreatePostDto } from "./create-post.dto";
import { UpdatePostDto } from "./update-post.dto";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async findAll(
    limit: number,
    offset: number,
    search?: string,
    userId?: number,
  ): Promise<Post[]> {
    const queryBuilder = this.postRepository.createQueryBuilder("posts");
    let hasWhereCondition = false;

    if (search !== undefined) {
      queryBuilder.where("posts.content ILIKE :search", {
        search: `%${search}%`,
      });
      hasWhereCondition = true;
    }

    if (userId !== undefined) {
      if (hasWhereCondition) {
        queryBuilder.andWhere("posts.userId = :userId", { userId });
      } else {
        queryBuilder.where("posts.userId = :userId", { userId });
        hasWhereCondition = true;
      }
    }

    queryBuilder.limit(limit);
    queryBuilder.offset(offset);

    queryBuilder.orderBy("posts.timestamp", "DESC");

    return await queryBuilder.getMany();
  }

  async findOne(id: string): Promise<Post | null> {
    return this.postRepository.findOneBy({ id });
  }

  async create(createPostDto: CreatePostDto, userId: number): Promise<Post> {
    const post = await this.postRepository.create({
      ...createPostDto,
      userId,
    });
    return this.postRepository.save(post);
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post | null> {
    const post = await this.postRepository.preload({ id, ...updatePostDto });
    if (!post) {
      return null;
    }
    return this.postRepository.save(post);
  }

  async remove(id: string): Promise<Post | null> {
    const post = await this.findOne(id);
    if (!post) {
      return null;
    }
    return this.postRepository.remove(post);
  }
}
