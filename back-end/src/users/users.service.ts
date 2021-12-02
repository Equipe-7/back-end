import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma, User } from '@prisma/client';
import { UserRole } from './enum/role.enum';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput, role: UserRole) {
    const userExists = await this.prisma.user.findUnique({
      where: { username: data.username },
    });

    if (userExists) {
      throw new ConflictException('Usuário já está cadastrado');
    }

    const salt = 10;
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const user = await this.prisma.user.create({
      data: {
        ...data,
        role: role,
        password: hashedPassword,
      },
    });

    delete user.password;
    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    const newUsers = await users.map(({ password, ...resto }) => resto);
    return newUsers;
  }

  async findOne(username: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException('ID Não encontrado na base de dados');
    }

    delete user.password;
    return user;
  }

  async update(username: string, data: UpdateUserDto) {
    const updatedUser = await this.prisma.user.update({
      where: { username },
      data,
    });
    delete updatedUser.password;
    return updatedUser;
  }

  async remove(username: string) {
    const user = await this.prisma.user.delete({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException('ID Não encontrado na base de dados');
    }

    return {
      message: 'Usuário deletado com sucesso',
    };
  }
}
