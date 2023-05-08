import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://localhost:4000',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
