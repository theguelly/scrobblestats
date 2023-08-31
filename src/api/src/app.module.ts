import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { UsersModule } from './users/users.module';
import AppConfig from '@/common/config/app.config'
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbConfigService } from '@/common/config/mongodb.config.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [AppConfig],
    }),
    MongooseModule.forRootAsync({
      useClass: MongodbConfigService,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
