import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { CoinsService } from '../coins.service';
import { Ibank_details, bank_details } from 'src/app/Shared/Modals/BankAccount/bank_details';
import { Iwithdrawcoinrequestmodal, withdrawcoinrequestmodal } from 'src/app/Shared/Modals/Coins/withdraw_coin_request_modal';

@Component({
  selector: 'app-withdraw-coins-request',
  templateUrl: './withdraw-coins-request.component.html',
  styleUrls: ['./withdraw-coins-request.component.css']
})
export class WithdrawCoinsRequestComponent {

   withdrawCoinRequestFrom: FormGroup;
   submitted : boolean = false;
   file: any = null;
   returnType: any;
   bankdetails: Ibank_details;
   remainingCoins: number = 0;
   withdrawcoinrequestmodalobj: Iwithdrawcoinrequestmodal = new withdrawcoinrequestmodal();

  constructor(public bsModalRef:BsModalRef, private formBuilder:FormBuilder, 
    private router:Router, private coinsservice: CoinsService, 
    private toasterService: ToastrService) {
      this.withdrawCoinRequestFrom = this.formBuilder.group({
        coins: ['', [Validators.required]],
        bankDropdown: ['', [Validators.required]]
       },
     )
     this.bankdetails = new bank_details();
  }

  withdrawCoinRequest(){ 
    this.submitted = true;
      if(this.withdrawCoinRequestFrom.invalid) {
        return;
      }
      
      this.withdrawcoinrequestmodalobj.coins = this.withdrawCoinRequestFrom.value["coins"];
      this.withdrawcoinrequestmodalobj.bankId = this.withdrawCoinRequestFrom.value["bankDropdown"];
      
      this.coinsservice.withdraw_coin_request_insert(this.withdrawcoinrequestmodalobj);
  }

  ChangeWithDrawBank(){
    
  }

}
