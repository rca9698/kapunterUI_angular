export interface IGetIDs {
    userId: bigint,
    sessionUser: bigint
}

export class GetIDs {
    userId: bigint;
    sessionUser: bigint;

    constructor(userId: bigint, sessionUser: bigint){ 
        this.userId = userId,
        this.sessionUser = sessionUser
    }

}