import User from "./user";

export default class Tweet {
    private user: User;
    private tweet: string;

    constructor(user: User, tweet: string) {
        this.user = user;
        this.tweet = tweet;
    }
    getTweet() {
        return {
            username: this.user.getUsername(),
            avatar: this.user.getAvatar(),
            tweet: this.tweet
        }
    }
}