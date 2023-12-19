import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import {MongooseModule } from '@nestjs/mongoose'

import config from '../config/keys';

//Meeting place for controllers and services
@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(config.mongoURI)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
