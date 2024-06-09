import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DepositeCoinsByUserIdComponent } from './deposite_coins_by_user_id/deposite-coins-by-user-id.component';
import { WithdrawCoinsUserIdComponent } from './withdraw_coins_user_id/withdraw-coins-user-id.component';
import { environment } from 'src/environments/environment.development';
import { Ideposit_withdraw_coins_request } from 'src/app/Shared/Modals/Coins/deposit_withdraw_coins_request';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  bsmodalRef?: BsModalRef;
  constructor(private bsModalService:BsModalService,private http: HttpClient) { }
  
  OpenDepositeCoinsByUserIdPopup(userNumber: string){
    const initalstate: ModalOptions = {
      initialState:{
        userNumber,
      }
    }
    this.bsmodalRef = this.bsModalService.show(DepositeCoinsByUserIdComponent,initalstate);
  }

  OpenWithdrawCoinsUserIdPopup(userNumber: string){
    const initalstate: ModalOptions = {
      initialState:{
        userNumber,
      }
    }
    this.bsmodalRef = this.bsModalService.show(WithdrawCoinsUserIdComponent, initalstate);
  }

  deposit_list(obj: Ideposit_withdraw_coins_request){
    return this.http.post(`${environment.apiUrl}/api/Coin/GetCoinsRequest`, obj);
  }

  withdraw_list(obj: Ideposit_withdraw_coins_request){
     obj.coinType = 0;
    return this.http.post(`${environment.apiUrl}/api/Coin/GetCoinsRequest`, obj);
  }

  deposit_to_site_list(coinType: number, sessionUser: bigint){
    return this.http.get(`api/Coin/GetCoinsToAccountRequest/${coinType}/${sessionUser}`);
  }

  withdraw_from_site_list(coinType: number, sessionUser: bigint){
    return this.http.get(`api/Coin/GetCoinsToAccountRequest/${coinType}/${sessionUser}`);
  }
  
}
