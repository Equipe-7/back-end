import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // all subdomains
  app.enableCors({
    origin: /^(https:\/\/([^\.]*\.)?example\.com)$/i,
  });

  // http or https
  app.enableCors({
    origin: /https?:\/\/(([^/]+\.)?example\.com)$/i,
  });
  await app.listen(3000);
}
bootstrap();
