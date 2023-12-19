import { Injectable } from '@nestjs/common';
import{User} from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import {Model} from 'mongoose';
import{InjectModel} from '@nestjs/mongoose';

@Injectable()//inject this as a dependency into a ctor
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>){}



  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOne(id: number): Promise<User>{
    const userOjb =  await this.userModel.findOne( {_id: id});
    console.log(userOjb);
    return userOjb
  }
}
