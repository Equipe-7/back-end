import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRole } from './enum/role.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() data: CreateUserDto) {
    return this.usersService.create(data, UserRole.USER);
  }

  @Post('/admin')
  createAdmin(@Body() data: CreateUserDto) {
    return this.usersService.create(data, UserRole.ADMIN);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':username')
  update(@Param('username') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':username')
  remove(@Param('username') id: string) {
    return this.usersService.remove(id);
  }
}
