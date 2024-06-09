import { Component } from '@angular/core';
import { Icoins_request_model } from 'src/app/Shared/Modals/Coins/coins_request_model';
import { CoinsService } from '../coins.service';
import { Ideposit_withdraw_coins_request, deposit_withdraw_coins_request } from 'src/app/Shared/Modals/Coins/deposit_withdraw_coins_request';

@Component({
  selector: 'app-withdraw-list',
  templateUrl: './withdraw-list.component.html',
  styleUrls: ['./withdraw-list.component.css']
})
export class WithdrawListComponent {
  requestList: Icoins_request_model[] | undefined;  
  returnType:any;
  paginationCount: number = 1;
  totalCount: number = 0;

  constructor(private coinsService: CoinsService){ }
 
  withdrawcoinsPopup(coins_request_model: Icoins_request_model){

  }

  deletewithdrawcoinsPopup(coins_request_model: Icoins_request_model){

  }

  withdraw_list(){
    let obj: Ideposit_withdraw_coins_request = new deposit_withdraw_coins_request(0, 1 as unknown as bigint, 1 as unknown as bigint);
    this.coinsService.withdraw_list(obj);
  }

  PaginationNumber(pageNumber:number) { 

  }

  //function to return list of numbers from 0 to n-1 
  getCountArray(): number[] {
    return Array.from({ length: this.paginationCount }, (_, i) => i);
  }
}
