import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { UserIdsService } from '../user-ids.service';
import { AuthService } from 'src/app/auth.service';
import { Iupdate_coins_to_ids_request_modal, update_coins_to_ids_request_modal } from 'src/app/Shared/Modals/Coins/update_coins_to_ids_request_modal';

@Component({
  selector: 'app-deposite-coins-to-ids',
  templateUrl: './deposite-coins-to-ids.component.html',
  styleUrls: ['./deposite-coins-to-ids.component.css']
})
export class DepositeCoinsToIdsComponent {
  coinsToIDobj: any;
  
  DepositCoinsToIdsForm: FormGroup;
  submitted : boolean = false;
  updateCoinsToIds : Iupdate_coins_to_ids_request_modal = new update_coins_to_ids_request_modal();

  constructor(public bsModalRef:BsModalRef, private formBuilder:FormBuilder, 
    private router:Router, private useridsservice: UserIdsService, 
    private toasterService: ToastrService, public authservice: AuthService){
      this.DepositCoinsToIdsForm = this.formBuilder.group({
        coins: ['', [Validators.required]]
       },
     )
     
  }

  SendDepositCoinsToIds(){
    this.submitted = true;

    if(this.DepositCoinsToIdsForm.invalid) {
      return;
    }
    this.updateCoinsToIds.coinType = 0;
    
    console.log(this.coinsToIDobj);
    console.log(this.updateCoinsToIds);
    // this.useridsservice.DepositCoinsToIds(this.updateCoinsToIds);
  }

}
