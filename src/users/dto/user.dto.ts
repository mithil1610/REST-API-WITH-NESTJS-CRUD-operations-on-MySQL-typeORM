import { IsString, IsEmail, IsNumber, IsNotEmpty } from "class-validator";

export class UserDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;
}

export class UserParamsDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;
}