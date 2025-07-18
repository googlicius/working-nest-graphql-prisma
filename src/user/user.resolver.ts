import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput, UpdateUserInput } from '../graphql';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  async findAll() {
    return this.userService.findAll();
  }

  @Query()
  async userById(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation()
  async createUser(@Args('createUserInput') createUserInput: any) {
    return this.userService.create(createUserInput);
  }

  @Mutation()
  async updateUser(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: any,
  ) {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation()
  async removeUser(@Args('id') id: string) {
    return this.userService.remove(id);
  }
}
