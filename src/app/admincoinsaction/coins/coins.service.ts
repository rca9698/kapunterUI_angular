import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DepositeCoinsByUserIdComponent } from './admin_deposite_coins_by_user_id/admin-deposite-coins-by-user-id.component';
import { WithdrawCoinsUserIdComponent } from './withdraw_coins_user_id/withdraw-coins-user-id.component';
import { environment } from 'src/environments/environment.development';
import { Ideposit_withdraw_coins_request } from 'src/app/Shared/Modals/Coins/deposit_withdraw_coins_request';
import { WithdrawCoinsRequestComponent } from '../../userids/withdraw-coins-request/withdraw-coins-request.component';
import { apiService } from 'src/app/api.service';
import { DepositeCoinsRequestComponent } from '../../userids/deposite-coins-request/deposite-coins-request.component';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  bsmodalRef?: BsModalRef;
  constructor(private bsModalService:BsModalService, private http: HttpClient
    , private apiservice: apiService) { }
  
  OpenDepositeCoinsRequestPopup(title: string){
    const initalstate: ModalOptions = {
      initialState:{
        title
      }
    }
    this.bsmodalRef = this.bsModalService.show(DepositeCoinsRequestComponent, initalstate);
  }

  OpenWithdrawCoinsRequestPopup(title: string){
    const initalstate: ModalOptions = {
      initialState:{
        title
      }
    }
    this.bsmodalRef = this.bsModalService.show(WithdrawCoinsRequestComponent, initalstate);
  }

  OpenDepositeCoinsByUserIdPopup(userNumber: string){
    const initalstate: ModalOptions = {
      initialState:{
        userNumber,
      }
    }
    this.bsmodalRef = this.bsModalService.show(DepositeCoinsByUserIdComponent, initalstate);
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
    obj.coinType = 1;
    return this.apiservice.GetDepositeCoinsRequestList(obj);
  }

  withdraw_list(obj: Ideposit_withdraw_coins_request){
     obj.coinType = 0;
    return this.apiservice.GetWithdrawCoinsRequestList(obj);
  }

  deposit_to_site_list(coinType: number, sessionUser: bigint){
    coinType = 0;
    return this.apiservice.GetDepositeCoinstoSiteRequestList(coinType, sessionUser);
  }

  withdraw_from_site_list(coinType: number, sessionUser: bigint){
    coinType = 1;
    return this.apiservice.GetWithdrawCoinstoSiteRequestList(coinType, sessionUser);
  }

  deposite_coin_request_insert(obj: any){
    return this.apiservice.DepositeCoinRequestInsert(obj);
  }
  
  withdraw_coin_request_insert(obj: any){
    return this.apiservice.WithdrawCoinRequestInsert(obj);
  }

  set_default_bank_account(sessionUser: bigint, bankDetailID: bigint){
    return this.apiservice.SetDefaultBankAccount(sessionUser, bankDetailID);
  }

  get_bank_accounts(obj: any){
    return this.apiservice.GetBankAccounts(obj);
  }

  get_bank_account_by_id(bankId: bigint){
    return this.apiservice.GetBankAccountById(bankId);
  }

  get_bank_UPI_details(){
    return this.apiservice.GetBankUPIDetails();
  }

}
