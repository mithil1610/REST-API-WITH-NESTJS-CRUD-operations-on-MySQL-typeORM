import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number): Promise<User[]> {
        return this.usersService.getUser(id);
    }

    @Post()
    createUser(@Body() user: UserDto): Promise<any> {
        return this.usersService.createUser(user);
    }

    @Put(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() newUser: UserDto): Promise<any> {
        return this.usersService.updateUser(id, newUser);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number): Promise<any> {
        return this.usersService.deleteUser(id);
    }
}
