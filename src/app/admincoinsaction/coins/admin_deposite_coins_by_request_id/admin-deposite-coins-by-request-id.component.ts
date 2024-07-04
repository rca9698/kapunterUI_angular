
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/auth.service';
import { CoinsService } from '../coins.service';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { Iadmin_withdraw_coins_by_request_id, admin_withdraw_coins_by_request_id } from 'src/app/Shared/Modals/Coins/admin_withdraw_coins_by_request_id';

@Component({
  selector: 'app-admin-deposite-coins-by-request-id',
  templateUrl: './admin-deposite-coins-by-request-id.component.html',
  styleUrls: ['./admin-deposite-coins-by-request-id.component.css']
})
export class AdminDepositeCoinsByRequestIdComponent {
  obj: any;
  
  DepositCoinsByRequestIdForm: FormGroup;
  userNumber: string | undefined ;
  submitted = false;
  returnType: any;
  depositeobj: Iadmin_withdraw_coins_by_request_id 
      = new admin_withdraw_coins_by_request_id();

  constructor(public bsModalRef:BsModalRef, private formBuilder: FormBuilder,
    private router:Router, public authservice: AuthService
    , private coinsService: CoinsService, private toasterService: ToastrService){
      this.DepositCoinsByRequestIdForm = this.formBuilder.group({
        userNumber: ['', [Validators.required]],
        coins: ['', [Validators.required]]
       },
     )
 }

 SendDepositCoinsByRequestId() {
  this.submitted = true;
  
  if (this.DepositCoinsByRequestIdForm?.invalid) {
    return;
  } 
  
  this.coinsService.deposite_coins_by_request_id(this.depositeobj).subscribe(resp => {
    this.returnType = resp;
    if(this.returnType['returnStatus'] == 1){
      this.toasterService.success(this.returnType.returnMessage);
      this.bsModalRef.hide();
      this.router.navigate(['/site/list-sites']);
    }else{
      this.toasterService.warning(this.returnType.returnMessage);
    }
  })
 }
}
