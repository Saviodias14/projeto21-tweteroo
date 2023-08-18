import { Type } from "class-transformer";
import { IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator";
import User from "src/entities/user";

export class CreateTweetDTO {
    @ValidateNested()
    @Type(() => User)
    user: User
    @IsString()
    @IsNotEmpty()
    tweet: string
}