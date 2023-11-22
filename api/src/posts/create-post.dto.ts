import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePostDto {
  @IsString()
  @IsNotEmpty({ message: "Content cannot be empty" })
  content: string;

  @IsOptional()
  @IsString()
  image?: string;
}
