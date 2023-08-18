import User from "./user";

export default class Tweet {
    private user: User;
    private tweet: string;

    constructor(user: User, tweet: string){
        this.user = user;
        this.tweet = tweet;
    }
}