import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDTO } from "./create-user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ username });
  }

  async createUser(userDto: CreateUserDTO): Promise<User> {
    const user = new User();
    user.username = userDto.username;
    user.password = await bcrypt.hash(userDto.password, 10);
    return this.userRepository.save(user);
  }

  // You can add more methods as required, like createUser, updateUser, etc.
}
