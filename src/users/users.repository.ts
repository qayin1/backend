/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './create-user.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password } = createUserDto;

    const user = this.create({
      name,
      email,
      password,
    });

    return this.save(user);
  }
}