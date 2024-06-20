export interface ITokenusermodal{
    UserId: string,
    otp: string,
    role: string
}

export interface Iusermodal{
    userId: string,
    otp: string,
    role: string
}

export class usermodal{
    userId: string;
    otp: string;
    role: string;

    constructor(userId: string ='', otp: string = '', role: string = ''){
        this.userId = userId,
        this.otp = otp,
        this.role = role
    }
}