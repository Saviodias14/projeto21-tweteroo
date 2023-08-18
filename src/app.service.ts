import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/user.dto';
import User from './entities/user';
import Tweet from './entities/tweet';

@Injectable()
export class AppService {
  private users: User[] = []
  private tweets: Tweet[] = []

  constructor(){
    this.users.push(new User('Savin', 'data:image/jpeg;base64,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'))
  }
  getHello(): string {
    return 'Hello World!';
  }
  postSignIn(body: CreateUserDTO) {
    const {avatar, username} = body
    this.users.push(new User(username, avatar))
    return this.users
  }
}
