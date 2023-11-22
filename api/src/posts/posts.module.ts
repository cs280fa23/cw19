import { Module } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./post.entity";
import { UserService } from "src/user/user.service";
import { User } from "src/user/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Post, User])],
  providers: [PostsService, UserService],
  controllers: [PostsController],
})
export class PostsModule {}
