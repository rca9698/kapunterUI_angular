import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Iadmin_update_coins_to_ids, admin_update_coins_to_ids } from 'src/app/Shared/Modals/Coins/admin_update_coins_to_ids';
import { UserIdsService } from '../user-ids.service';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw-coins-from-ids',
  templateUrl: './withdraw-coins-from-ids.component.html',
  styleUrls: ['./withdraw-coins-from-ids.component.css']
})
export class WithdrawCoinsFromIdsComponent {
  coinsToIDobj: any;
  WithdrawCoinsToIdsForm: FormGroup;
  submitted : boolean = false;
  addIDRequest : Iadmin_update_coins_to_ids = new admin_update_coins_to_ids();

  constructor(public bsModalRef:BsModalRef, private formBuilder:FormBuilder, 
    private router:Router, private useridsservice: UserIdsService, 
    private toasterService: ToastrService, public authservice: AuthService){
      this.WithdrawCoinsToIdsForm = this.formBuilder.group({
        coins: ['', [Validators.required]]
       },
     )
  }

  SendWithdrawCoinsFromIds(){
    this.submitted = true;

    if(this.WithdrawCoinsToIdsForm.invalid) {
      return;
    }

  }

}
