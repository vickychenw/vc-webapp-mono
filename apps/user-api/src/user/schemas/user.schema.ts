import * as mongoose from 'mongoose';


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import {User as IUser}  from '../interfaces/user.interface';


export type UserDocument = mongoose.HydratedDocument<IUser>;

//we can manually define schema or use Typescript decorators
// export const UserSchema = new mongoose.Schema({
//   id: Number,
//   firstName: String,
//   lastName : String
// });


@Schema()
export class User {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  manager: User;
}

export const UserSchema = SchemaFactory.createForClass(User);
