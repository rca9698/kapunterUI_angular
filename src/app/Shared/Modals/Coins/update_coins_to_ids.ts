export interface IupdateCoinsToIds{
    coinsRequestId: string;
    userId: bigint;
    siteId: number;
    coins:  bigint;
    coinType: number;
    sessionUser: bigint;
}

export class updateCoinsToIds implements IupdateCoinsToIds{
    coinsRequestId: string;
    userId: bigint;
    siteId: number;
    coins:  bigint;
    coinType: number;
    sessionUser: bigint;
    constructor(coinsRequestId: string = '',userId: bigint = 0 as unknown as bigint
        , siteId: number = 0, coins: bigint =0 as unknown as bigint, coinType: number = 0
    , sessionUser: bigint = 0 as unknown as bigint ){
        this.coinsRequestId = coinsRequestId;
        this.userId = userId;
        this.siteId = siteId;
        this.coins = coins;
        this.coinType = coinType;
        this.sessionUser = sessionUser;
    }
}