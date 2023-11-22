import { Catch, ArgumentsHost, HttpException } from "@nestjs/common";
import { Response } from "express";

@Catch()
export class HttpResponseFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    let errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    if (exception instanceof HttpException) {
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === "string") {
        // If the response is a string, set it as the message
        errorResponse["message"] = exceptionResponse;
      } else {
        // If the response is an object, spread it into errorResponse
        errorResponse = { ...errorResponse, ...exceptionResponse };
      }
    } else {
      errorResponse["message"] = "Internal Server Error";
      if (process.env.NODE_ENV === "development") {
        errorResponse["error"] = exception.toString();
      }
    }

    response.status(status).json(errorResponse);
  }
}
