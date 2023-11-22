import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { HttpResponseFilter } from "./filters/http-response.filter"; // <-- Add this line
import { HttpResponseInterceptor } from "./interceptors/http-response.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpResponseFilter()); // <-- Add this line
  app.useGlobalInterceptors(new HttpResponseInterceptor());
  await app.listen(3000);
}
bootstrap();
