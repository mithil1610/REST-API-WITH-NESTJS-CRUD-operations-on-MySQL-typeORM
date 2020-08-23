import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 10, unique: true})
    username: string;

    @Column({length: 25, unique: true})
    email: string;
}