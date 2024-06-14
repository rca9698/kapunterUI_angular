export interface Iwithdrawcoinrequestmodal{
    coins: number,
    bankId: number,
    sessionuser: bigint,
    userid: bigint
}

export class withdrawcoinrequestmodal{
    coins: number;
    bankId: number;
    sessionuser: bigint;
    userid: bigint;

    constructor(coins: number = 0, bankId: number = 0, sessionuser: bigint = 0 as unknown as bigint, userid: bigint = 0 as unknown as bigint){
        this.coins = coins,
        this.bankId = bankId,
        this.sessionuser = sessionuser,
        this.userid = userid
    }
}