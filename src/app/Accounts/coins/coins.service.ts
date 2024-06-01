import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DepositeCoinsByUserIdComponent } from './depositeCoinsByUserId/deposite-coins-by-user-id.component';
import { WithdrawCoinsUserIdComponent } from './WithdrawCoinsUserId/withdraw-coins-user-id.component';

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
    this.bsmodalRef = this.bsModalService.show(WithdrawCoinsUserIdComponent,initalstate);
  }

}
