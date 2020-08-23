import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult, getConnection, InsertResult } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async getUsers(): Promise<User[]> {
        return await this.userRepository.find({});
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.userRepository.find({
            select: ['username', 'email'],
            where: [{ 'id': _id }]
        });
    }

    async createUser(user: User): Promise<InsertResult> {
        //return await this.userRepository.save(user);
        return await getConnection()
            .createQueryBuilder()
            .insert()
            .into(User)
            .values(user)
            .onConflict(`("id") DO NOTHING`)
            .execute();
    }

    async updateUser(_id: number, updatedUser: User): Promise<UpdateResult> {
        //return await this.userRepository.update(user.id, user);
        return await getConnection()
            .createQueryBuilder()
            .update(User).set({ id: updatedUser.id, username: updatedUser.username, email: updatedUser.email })
            .where("id = :id", { id: _id })
            .execute();
    }

    async deleteUser(_id: number): Promise<DeleteResult> {
        return await this.userRepository.delete(_id);
    }
}
