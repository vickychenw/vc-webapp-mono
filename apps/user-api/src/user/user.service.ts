import { Injectable } from '@nestjs/common';
import{User} from './interfaces/user.interface';

@Injectable()//inject this as a dependency into a ctor
export class UserService {

  private readonly users: User[] = [
    {
      id: 1,
      firstName: 'Vicky',
      lastName: 'Chen'
    },
    {
      id: 2,
      firstName: 'Vikki',
      lastName: 'Chan'
    },
    {
      id: 1,
      firstName: 'Joe',
      lastName: 'Doe'
    }
  ]

  findAll(): User[] {
    return this.users;
  }
}
