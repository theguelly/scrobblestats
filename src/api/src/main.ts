import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Get configuration values
  const globalPrefix = configService.get<string>('prefix');
  const port = configService.get<number>('port');

  // Set global prefix and start listening
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
}
bootstrap();
