export interface IIDRequestModal{
    accountRequestId: bigint,
    userId: bigint,
    userNumber: bigint,
    siteName: string,
    siteURL: string,
    siteId: number,
    userName: string,
    documentDetailId: string,
    fileExtenstion: string,
    createdBy: string,
    createdDate: string,
    UpdatedBy: string,
    UpdatedDate: string
}
 
export class IDRequestModal implements IIDRequestModal {
    accountRequestId: bigint;
    userId: bigint;
    userNumber: bigint;
    userName: string;
    siteId: number;
    siteName: string;
    siteURL: string;
    documentDetailId: string;
    fileExtenstion: string;
    createdBy: string;
    createdDate: string;
    UpdatedBy: string;
    UpdatedDate: string;

    constructor(siteId: number = 0, siteName: string = '', siteURL: string = '', userId: bigint= 0 as unknown as bigint
    ,accountRequestId: bigint = 0 as unknown as bigint, userNumber: bigint = 0 as unknown as bigint, userName: string = ''
    ,documentDetailId: string = '', fileExtenstion: string = '', createdBy: string = '', createdDate: string = ''
    ,UpdatedBy: string = '', UpdatedDate: string = ''
    ) {
        this.siteId = siteId;
        this.siteName = siteName;
        this.siteURL = siteURL;
        this.userId = userId;
        this.accountRequestId = accountRequestId;
        this.userNumber = userNumber;
        this.userName = userName;
        this.documentDetailId = documentDetailId;
        this.fileExtenstion = fileExtenstion;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.UpdatedBy = UpdatedBy;
        this.UpdatedDate = UpdatedDate;
      }
}