export interface IDeleteBankAccount{
    userId: bigint,
    sessionUser: bigint,
    bankId: bigint
}

export class DeleteBankAccount{
    userId: bigint;
    sessionUser: bigint;
    bankId: bigint;
    constructor(userId: bigint = 0 as unknown as bigint
        ,  sessionUser: bigint = 0 as unknown as bigint, bankId: bigint){
        this.userId = userId;
        this.sessionUser = sessionUser;
        this.bankId = bankId;
    }
}