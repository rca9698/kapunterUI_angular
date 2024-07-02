import { Component } from '@angular/core';
import { Icoins_request_model } from 'src/app/Shared/Modals/Coins/coins_request_model';
import { CoinsService } from '../coins.service';
import { Ideposit_withdraw_coins_request, deposit_withdraw_coins_request } from 'src/app/Shared/Modals/Coins/deposit_withdraw_coins_request';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-deposite-list',
  templateUrl: './deposite-list.component.html',
  styleUrls: ['./deposite-list.component.css']
})
export class DepositeListComponent {
  requestList: Icoins_request_model[] | undefined;  
  returnType:any;
  paginationCount: number = 1;
  totalCount: number = 0;
  private readonly _sessionUser: bigint;
  
  constructor(private coinsservice:CoinsService, private authservice: AuthService){
    this._sessionUser = this.authservice.user.userId;
   }

  deposite_list(){
    let obj: Ideposit_withdraw_coins_request = new deposit_withdraw_coins_request(1, 1 as unknown as bigint, 1 as unknown as bigint);
    this.coinsservice.deposit_list(obj);
  }

  ViewCoinRequestProof(obj: Icoins_request_model){

  }

  DepositCoinsPopup(obj: Icoins_request_model){
     
  }

  DeleteCoinRequestPopup(obj: Icoins_request_model){

  }


  
  PaginationNumber(pageNumber:number) { 

  }

  //function to return list of numbers from 0 to n-1 
  getCountArray(): number[] {
    return Array.from({ length: this.paginationCount }, (_, i) => i);
  }
}
