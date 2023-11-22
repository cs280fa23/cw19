import { IsString, MinLength, MaxLength } from "class-validator";

export class CreateUserDTO {
  @IsString()
  @MinLength(4, { message: "Username is too short" })
  @MaxLength(20, { message: "Username is too long" })
  username: string;

  @IsString()
  @MinLength(8, { message: "Password is too short" })
  password: string;
}
