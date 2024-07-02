import { Component } from '@angular/core';
import { CoinsService } from '../coins.service';
import { Icoins_to_site_request_listing_modal } from 'src/app/Shared/Modals/Coins/coins_to_site_request_listing_modal';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-withdraw-from-site-list',
  templateUrl: './withdraw-from-site-list.component.html',
  styleUrls: ['./withdraw-from-site-list.component.css']
})
export class WithdrawFromSiteListComponent {
  requestList: Icoins_to_site_request_listing_modal[] | undefined;  
  returnType:any;
  paginationCount: number = 1;
  totalCount: number = 0;
  private readonly _sessionUser: bigint;
  
  constructor(private coinsservice:CoinsService, private authservice: AuthService){
    this._sessionUser = this.authservice.user.userId;
   }

  deposite_to_site_list(){
    this.coinsservice.withdraw_from_site_list(1, 1 as unknown as bigint);
  }

  withdrawcoinsfromsitePopup(coins_to_site_request_modal: Icoins_to_site_request_listing_modal){

  }

  deletewithdrawcoinsfromsitePopup(coins_to_site_request_modal: Icoins_to_site_request_listing_modal){

  }

  
  PaginationNumber(pageNumber:number) { 

  }

  //function to return list of numbers from 0 to n-1 
  getCountArray(): number[] {
    return Array.from({ length: this.paginationCount }, (_, i) => i);
  }
}
