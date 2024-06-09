import { Component } from '@angular/core';
import { Icoins_to_site_request_modal } from 'src/app/Shared/Modals/Coins/coins_to_site_request_modal';
import { CoinsService } from '../coins.service';

@Component({
  selector: 'app-deposite-to-site-list',
  templateUrl: './deposite-to-site-list.component.html',
  styleUrls: ['./deposite-to-site-list.component.css']
})
export class DepositeToSiteListComponent {
  requestList: Icoins_to_site_request_modal[] | undefined;  
  returnType:any;
  paginationCount: number = 1;
  totalCount: number = 0;
  
  constructor(private coinsservice:CoinsService){ }

  deposite_to_site_list(){
    this.coinsservice.deposit_to_site_list(0, 1 as unknown as bigint);
  }

  DepositeCoinsToAccountPopup(coins_to_site_request_modal: Icoins_to_site_request_modal){

  }

  DeleteCoinsToAccountRequestPopup(coins_to_site_request_modal: Icoins_to_site_request_modal){

  }

  PaginationNumber(pageNumber:number) { 

  }

  //function to return list of numbers from 0 to n-1 
  getCountArray(): number[] {
    return Array.from({ length: this.paginationCount }, (_, i) => i);
  }
}
