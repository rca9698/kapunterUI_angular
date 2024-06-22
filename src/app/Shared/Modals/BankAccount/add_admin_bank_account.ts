export interface Iadd_admin_bank_account{
    userId: bigint,
    bankName: string,
    accountHolderName: string,
    accountNumber: string,
    ifscCode: string,
    upiId: string,
    upiName: string,
    sessionUser: bigint
}

export class add_admin_bank_account implements Iadd_admin_bank_account {
    userId: bigint;
    bankName: string;
    accountHolderName: string;
    accountNumber: string;
    ifscCode: string;
    upiId: string;
    upiName: string;
    sessionUser: bigint;
    constructor(userId: bigint = 0 as unknown as bigint, bankName: string = '', accountHolderName: string = ''
        , accountNumber: string = '', ifscCode: string = '', upiId: string = '', upiName: string = ''
        , sessionUser: bigint = 0 as unknown as bigint
    ){
        this.userId = userId;
        this.bankName = bankName;
        this.accountHolderName = accountHolderName;
        this.accountNumber = accountNumber;
        this.ifscCode = ifscCode;
        this.upiId = upiId;
        this.upiName = upiName;
        this.sessionUser = sessionUser;
    }
}

