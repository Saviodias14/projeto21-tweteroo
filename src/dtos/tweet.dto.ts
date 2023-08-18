import { Type } from "class-transformer";
import { IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator";
import User from "src/entities/user";

export class CreateTweetDTO {
    @IsString()
    @IsNotEmpty()
    username: string
    @IsString()
    @IsNotEmpty()
    tweet: string
}