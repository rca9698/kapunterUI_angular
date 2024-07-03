import { Component } from '@angular/core';
import { CoinsService } from '../coins.service';
import { Icoins_to_site_request_listing_modal } from 'src/app/Shared/Modals/Coins/coins_to_site_request_listing_modal';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'src/app/toastr/toastr.service';

@Component({
  selector: 'app-deposite-to-site-list',
  templateUrl: './deposite-to-site-list.component.html',
  styleUrls: ['./deposite-to-site-list.component.css']
})
export class DepositeToSiteListComponent {
  requestList: Icoins_to_site_request_listing_modal[] | undefined;  
  returnType:any;
  paginationCount: number = 1;
  totalCount: number = 0;
  private readonly _sessionUser: bigint;
  
  constructor(private coinsservice:CoinsService, private authservice: AuthService
    , private toasterService: ToastrService
  ){
    this._sessionUser = this.authservice.user.userId;
   }

  deposite_to_site_list(){
    this.coinsservice.deposit_to_site_list(0, this._sessionUser).subscribe(resp => {
      this.returnType = resp;
      if(this.returnType['returnStatus'] == 1){
        this.requestList = this.returnType['returnList'];
      }else{
        this.toasterService.warning(this.returnType.returnMessage);
      }
    });
  }

  DepositeCoinsToAccountPopup(coins_to_site_request_modal: Icoins_to_site_request_listing_modal){

  }

  DeleteCoinsToAccountRequestPopup(coins_to_site_request_modal: Icoins_to_site_request_listing_modal){

  }

  PaginationNumber(pageNumber:number) { 

  }

  //function to return list of numbers from 0 to n-1 
  getCountArray(): number[] {
    return Array.from({ length: this.paginationCount }, (_, i) => i);
  }
}
