import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/auth.service';
import { admin_deposite_withdraw_coins_ids_by_request_id, Iadmin_deposite_withdraw_coins_ids_by_request_id } from 'src/app/Shared/Modals/Coins/admin_deposite_withdraw_coins_ids_by_request_id';
import { CoinsService } from '../coins.service';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-admin-withdraw-coins-to-id-request-id',
  templateUrl: './admin-withdraw-coins-to-id-request-id.component.html',
  styleUrls: ['./admin-withdraw-coins-to-id-request-id.component.css']
})
export class AdminWithdrawCoinsToIdRequestIdComponent {
  obj: any;
  
  sitePath: string;
  withdrawCoinsfromidsFrom: FormGroup;
  submitted = false;
  _sessionUser: bigint;
  returnType: any;
  withdrawobj: Iadmin_deposite_withdraw_coins_ids_by_request_id 
      = new admin_deposite_withdraw_coins_ids_by_request_id();

  constructor(public bsModalRef:BsModalRef, private formBuilder: FormBuilder,
    private router:Router, public authservice: AuthService
    , private coinsService: CoinsService, private toasterService: ToastrService){
      this.withdrawCoinsfromidsFrom = this.formBuilder.group({
        coins: ['', [Validators.required]]
       },
     )
     this.sitePath = environment.imagePath.sitePath;
     this._sessionUser = authservice.user.userId;
 }

 WithdrawCoinsToIds() {
  this.submitted = true;
  
  if (this.withdrawCoinsfromidsFrom?.invalid) {
    return;
  } 
  this.withdrawobj.userId = this.obj.userId;
  this.withdrawobj.siteId = this.obj.siteId;
  this.withdrawobj.sessionUser = this._sessionUser;
  this.withdrawobj.coins = this.obj.coins;
  this.withdrawobj.coinType = 1;
  this.withdrawobj.coinsRequestId = this.obj.coinsRequestId;
  
  this.coinsService.deposite_withdraw_coins_to_ids(this.withdrawobj).subscribe(resp => {
    this.returnType = resp;
    if(this.returnType['returnStatus'] == 1){
      this.toasterService.success(this.returnType.returnMessage);
      this.bsModalRef.hide();
      this.router.navigate(['/userids/list-user-ids']);
    }else{
      this.toasterService.warning(this.returnType.returnMessage);
    }
  })
 }
}
