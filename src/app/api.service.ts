import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from './Shared/Modals/login';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class apiService {

  constructor(private http: HttpClient) { }

  //login signup APIs Start

  sendOtp(obj: string){
     return this.http.get(`${environment.apiUrl}/api/LoginSignup/Generate_Otp/${obj}`);
    }
  
  login(obj: login){
     return this.http.post(`${environment.apiUrl}/api/LoginSignup/Login_GetToken`, obj);
  }

  //login signup APIs End
   
  // User Related APIs Start

  GetUsers(obj: any){
    return this.http.post(`${environment.apiUrl}/api/User/GetUsers`, obj);
  }

  GetUserById(obj: any){
    return this.http.post(`${environment.apiUrl}/api/User/GetUserById`, obj);
  }

  AddUser(obj: any){
    return this.http.post(`${environment.apiUrl}/api/User/AddUser`, obj);
  }

  UpdateUser(obj: any){
    return this.http.post(`${environment.apiUrl}/api/User/UpdateUser`, obj);
  }

  DeleteUser(obj: any){
    return this.http.post(`${environment.apiUrl}/api/User/DeleteUser`, obj);
  }

  // User Related APIs end

  // Site Related APIs Start
  AddSite(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Site/AddSiteDetail`, obj);
  }

  GetSites(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Site/GetSites`, obj);
  }

  DeleteSite(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Site/DeleteSite`, obj);
  }

  UpdateSite(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Site/UpdateSite`, obj);
  }

  GetUserListSiteById(userId: bigint){
    return this.http.get(`${environment.apiUrl}/api/Site/GetUserListSiteById/${userId}`);
  }

  GetUserListSites(){
    return this.http.get(`${environment.apiUrl}/api/Site/GetUserListSites`);
  }

  ViewThisSiteDetails(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Site/ViewThisSiteDetails`, obj);
  }

  // Site Related APIs end

  // Profile Related APIs Start
  ChangePassword(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Profile/ChangePassword`, obj);
  }
  // Profile Related APIs End

  //PassbookHistory Related APIs Start
  GetPassbookHistory(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Passbook/GetPassbookHistory`, obj);
  }

  GetPassbookHistoryById(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Passbook/GetPassbookHistoryById`, obj);
  }

  //PassbookHistory Related APIs End

  // IDs Related APIs Start

  GetIDs(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/GetIDs`, obj);
  }

  listIdRequests(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/IDRequestList`, obj);
 }

   IDRequestDetails(accountRequestId: bigint){
    return this.http.get(`${environment.apiUrl}/api/Account/IDRequestDetails/${accountRequestId}`);
  }

  AddID(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/AddID`,obj);
  }

  AddIDRequest(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/AddIDRequest`,obj);
  }

  DeleteID(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/DeleteID`,obj);
  }

  DeleteIDRequest(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/DeleteIDRequest`,obj);
  }

  ListIDChangePassword(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/ListIDChangePassword`,obj);
  }

  ListIDCloseRequest(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/ListIDCloseRequest`,obj);
  }

  AddChangeIDPassword(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/AddChangeIDPassword`,obj);
  }

  AddCloseID(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/AddCloseID`,obj);
  }

  ConfirmChangeIDPassword(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/ConfirmChangeIDPassword`,obj);
  }

  ConfirmCloseID(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/ConfirmCloseID`,obj);
  }
  
  //  IDs Related APIs end

  // Dashboard Related APIs Start
  AddDashboardImage(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Home/AddDashboardImages`,obj);
  }

  GetDashboardImages(){
    return this.http.get(`${environment.apiUrl}/api/Home/GetDashboardImages`);
  }

  DeleteDashboardImages(docId: string){
    return this.http.get(`api/Home/DeleteDahboardImages/${docId}`);
  }
  // Dashboard Related APIs end

  //Dropdown Related APIs Start
  StatusTypes(obj: any){
    return this.http.post(`${environment.apiUrl}/api/BankAccount/AddBankAccount`, obj);
  }

  TransactionTypes(obj: any){
    return this.http.post(`${environment.apiUrl}/api/BankAccount/AddBankAccount`, obj);
  }

  //Dropdown Related APIs Start

  //Coins Related APIs start

  WithdrawCoinRequestInsert(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/WithDrawCoinsRequest`, obj);
  }
  
  GetTransaction(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/GetTransaction`, obj);
  }

  GetDepositeCoinsRequestList(obj: any){
    console.log(obj);
    return this.http.post(`${environment.apiUrl}/api/Coin/GetCoinsRequest`, obj);
  }

  GetDepositeCoinstoSiteRequestList(coinType: number, sessionUser: bigint){
    return this.http.get(`${environment.apiUrl}/api/Coin/GetCoinsToAccountRequest/${coinType}/${sessionUser}`);
  }
  
  GetWithdrawCoinstoSiteRequestList(coinType: number, sessionUser: bigint){
    return this.http.get(`${environment.apiUrl}/api/Coin/GetCoinsToAccountRequest/${coinType}/${sessionUser}`);
  }
  
  DepositeCoinRequestInsert(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/AddCoinsRequestDetail`, obj);
  }

  GetWithdrawCoinsRequestList(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/GetCoinsRequest`, obj);
  }

  UpdateCoinsToWallet(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/UpdateCoins`, obj);
  }

  DeleteCoinsFromWallet(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/RemoveCoinsFromWallet`, obj);
  }

  UpdateCoinsToAccountRequest(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/DeleteCoins`, obj);
  }

  UpdateCoinsToId(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/UpdateCoinsToAccountRequest`, obj);
  }

  DeleteCoinsRequestToId(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/UpdateCoinsToAccount`, obj);
  }

  DeleteRequestCoins(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/DeleteAccountRequestCoins`, obj);
  }

  DepositeCoinsByUserid(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/DeleteRequestCoins`, obj);
  }

  WithdrawCoinsByuserId(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/WithdrawCoinsByuserId`, obj);
  }

  //Coins Related APIs end


  //Bank Related APIs Start

  AddBankAccount(obj: any){
    console.log(obj);
    return this.http.post(`${environment.apiUrl}/api/BankAccount/AddBankAccount`, obj);
  }

  SetDefaultBankAccount(sessionUser: bigint, bankDetailID: bigint){
    return this.http.get(`${environment.apiUrl}/api/BankAccount/SetDefaultBankAccount/${sessionUser}/${bankDetailID}`);
  }

  GetBankAccountById(bankDetailID: bigint){
    return this.http.get(`${environment.apiUrl}/api/BankAccount/GetBankAccountById/${bankDetailID}`);
  }

  DeleteBankAccount(obj: any){
    return this.http.post(`${environment.apiUrl}/api/BankAccount/DeleteBankAccount`, obj);
  }

  GetBankAccounts(obj: any){
    return this.http.post(`${environment.apiUrl}/api/BankAccount/GetBankAccounts`, obj);
  }

  GetBankUPIDetails(){
    return this.http.get(`${environment.apiUrl}/api/BankAccount/GetAdminBankAccounts`);
  }

  updateBankAccount(obj: any){
    return this.http.post(`${environment.apiUrl}/api/BankAccount/UpdateBankAccount`, obj);
  }

  ActiveBankAccounts(obj: any){
    return this.http.post(`${environment.apiUrl}/api/BankAccount/GetBankAccounts`, obj);
  }

  DeletedBankAccounts(obj: any){
    return this.http.post(`${environment.apiUrl}/api/BankAccount/DeleteBankAccount`, obj);
  }

  AdminBankAccounts(){
    return this.http.get(`${environment.apiUrl}/api/BankAccount/GetAdminBankAccounts`);
  }

  AddUpdateAdminBankAccount(obj: any){
    return this.http.post(`${environment.apiUrl}/api/BankAccount/AddUpdateAdminBankAccount`, obj);
  }

  DeleteAdminBankAccount(obj: any){
    return this.http.post(`${environment.apiUrl}/api/BankAccount/DeleteAdminBankAccount`, obj);
  }

  SetDefaultAdminBankAccount(obj: any){
    return this.http.get(`${environment.apiUrl}/api/BankAccount/SetDefaultAdminBankAccount/${obj.sessionUser}/${obj.bankDetailID}`);
  }

  GetAdminUpiAccounts(){
    return this.http.get(`${environment.apiUrl}/api/BankAccount/GetAdminUpiAccount`);
  }

  AddUpdateAdminUpiAccount(obj: any){
    console.log(obj);
    return this.http.post(`${environment.apiUrl}/api/BankAccount/AddUpdateAdminUpiAccount`,obj)
  }

  DeleteAdminUpiAccount(sessionUser: bigint, upiId: bigint){
    return this.http.get(`${environment.apiUrl}/api/BankAccount/DeleteAdminUpiAccount/${sessionUser}/${upiId}`)
  }

  DeleteAdminqrAccount(sessionUser: bigint, qrId: bigint){
    return this.http.get(`${environment.apiUrl}/api/BankAccount/DeleteAdminQrAccount/${sessionUser}/${qrId}`)
  }

  SetDefaultAdminUpiAccount(obj: any){
    return this.http.get(`${environment.apiUrl}/api/BankAccount/SetDefaultAdminUpiAccount/${obj.sessionUser}/${obj.upiId}`)
  }

  GetAdminQRCode(){
    return this.http.get(`${environment.apiUrl}/api/BankAccount/GetAdminQRCode`)
  }

  AddAdminQRCode(obj: any){
    return this.http.post(`${environment.apiUrl}/api/BankAccount/AddUpdateAdminQRDetail`,obj)
  }

  SetDefaultAdminQr(obj: any){
    return this.http.get(`${environment.apiUrl}/api/BankAccount/SetDefaultAdminQr/${obj.sessionUser}/${obj.qrId}`)
  }

  //Bank Related APIs End

}
