export interface Iadd_bank_account{
    userId: bigint,
    bankName: string,
    accountHolderName: string,
    accountNumber: string,
    ifscCode: string,
    sessionUser: bigint
}

export class add_bank_account implements Iadd_bank_account{
    userId: bigint;
    bankName: string;
    accountHolderName: string;
    accountNumber: string;
    ifscCode: string;
    sessionUser: bigint;

    constructor(userId: bigint = 0 as unknown as bigint, bankName: string = '', accountHolderName: string = ''
        , accountNumber: string = '', ifscCode: string = '', sessionUser: bigint = 0 as unknown as bigint
    ){
        this.userId = userId,
        this.bankName = bankName,
        this.accountHolderName = accountHolderName,
        this.accountNumber = accountNumber,
        this.ifscCode = ifscCode,
        this.sessionUser = sessionUser
    }
}

