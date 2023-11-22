import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

export interface RequestWithUser extends Request {
  user: {
    userId: number;
    username: string;
  };
}

export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest(); // Switching to HTTP context and getting the req object
    const user = (request as RequestWithUser).user;
    return user.userId;
  },
);
