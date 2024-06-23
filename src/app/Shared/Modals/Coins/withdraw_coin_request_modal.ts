export interface Iwithdrawcoinrequestmodal{
    coins: number,
    bankId: bigint,
    sessionUser: bigint,
    userId: bigint
}

export class withdrawcoinrequestmodal{
    coins: number;
    bankId: bigint;
    sessionUser: bigint;
    userId: bigint;

    constructor(coins: number = 0.0, bankId: bigint = 0 as unknown as bigint, sessionuser: bigint = 0 as unknown as bigint, userid: bigint = 0 as unknown as bigint){
        this.coins = coins,
        this.bankId = bankId,
        this.sessionUser = sessionuser,
        this.userId = userid
    }
}