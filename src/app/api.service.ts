import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from './Shared/Modals/login';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class apiService {

  constructor(private http: HttpClient) { }

  sendOtp(obj: string){
     return this.http.get(`${environment.apiUrl}/api/LoginSignup/Generate_Otp/${obj}`);
    }
  
  login(obj: login){
     return this.http.post(`${environment.apiUrl}/api/LoginSignup/Login_GetToken`, obj);
  }

  listIdRequests(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/IDRequestList`, obj);
 }
   
  GetIDs(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Account/GetIDs`, obj);
  }

  GetDepositeCoinsRequestList(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/GetCoinsRequest`, obj);
  }

  GetWithdrawCoinsRequestList(obj: any){
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

  WithdrawCoinRequestInsert(obj: any){
    return this.http.post(`${environment.apiUrl}/api/Coin/WithDrawCoinsRequest`, obj);
  }

}
