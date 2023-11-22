import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class HttpResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((response) => {
        if (typeof response === "object" && "data" in response) {
          return {
            statusCode: context.switchToHttp().getResponse().statusCode,
            message: "Success",
            ...response,
          };
        }

        return {
          statusCode: context.switchToHttp().getResponse().statusCode,
          message: "Success",
          data: response,
        };
      }),
    );
  }
}
