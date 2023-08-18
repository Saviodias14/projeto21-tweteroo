import { Type } from "class-transformer";
import { IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator";
import User from "src/entities/user";

export class CreateTweetDTO {
    @IsString({ message: "All fields are required!" })
    @IsNotEmpty({ message: "All fields are required!" })
    username: string
    @IsString({ message: "All fields are required!" })
    @IsNotEmpty({ message: "All fields are required!" })
    tweet: string
}