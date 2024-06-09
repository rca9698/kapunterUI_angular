export interface Iusermodal{
    userId: bigint,
    otp: string,
    roles: string[]
}

export class usermodal{
    userId: bigint;
    otp: string;
    roles: string[];

    constructor(userId: bigint = 0 as unknown as bigint, otp: string = '', roles: string[] = []){
        this.userId = userId,
        this.otp = otp,
        this.roles = roles
    }
}