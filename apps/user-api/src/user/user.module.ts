import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';

//Wrapper for controllers and services
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
