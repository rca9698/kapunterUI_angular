import { Component } from '@angular/core';
import { Icoins_to_site_request_modal } from 'src/app/Shared/Modals/Coins/coins_to_site_request_modal';
import { CoinsService } from '../coins.service';

@Component({
  selector: 'app-withdraw-from-site-list',
  templateUrl: './withdraw-from-site-list.component.html',
  styleUrls: ['./withdraw-from-site-list.component.css']
})
export class WithdrawFromSiteListComponent {
  requestList: Icoins_to_site_request_modal[] | undefined;  
  returnType:any;
  paginationCount: number = 1;
  totalCount: number = 0;
  
  constructor(private coinsservice: CoinsService){ }

  deposite_to_site_list(){
    this.coinsservice.withdraw_from_site_list(1, 1 as unknown as bigint);
  }

  withdrawcoinsfromsitePopup(coins_to_site_request_modal: Icoins_to_site_request_modal){

  }

  deletewithdrawcoinsfromsitePopup(coins_to_site_request_modal: Icoins_to_site_request_modal){

  }

  
  PaginationNumber(pageNumber:number) { 

  }

  //function to return list of numbers from 0 to n-1 
  getCountArray(): number[] {
    return Array.from({ length: this.paginationCount }, (_, i) => i);
  }
}
