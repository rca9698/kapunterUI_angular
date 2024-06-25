import { Injectable } from '@angular/core';
import { apiService } from '../api.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DepositeCoinsToIdsComponent } from './deposite-coins-to-ids/deposite-coins-to-ids.component';
import { WithdrawCoinsFromIdsComponent } from './withdraw-coins-from-ids/withdraw-coins-from-ids.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserIdsService {
  bsmodalRef?: BsModalRef;
  constructor(private bsModalService:BsModalService,private http: HttpClient
    , private apiservice: apiService) { }
  
  AddIDRequest(obj: any){
    return this.apiservice.AddIDRequest(obj);
  }
  
  OpenDepositeCoinsToIDPopup(coinsToIDobj: string){
    const initalstate: ModalOptions = {
      initialState:{
        coinsToIDobj,
      }
    }
    this.bsmodalRef = this.bsModalService.show(DepositeCoinsToIdsComponent, initalstate);
  }

  OpenWithdrawCoinsFromIdPopup(coinsToIDobj: any){
    const initalstate: ModalOptions = {
      initialState:{
        coinsToIDobj,
      }
    }
    this.bsmodalRef = this.bsModalService.show(WithdrawCoinsFromIdsComponent, initalstate);
  }

}
