import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/auth.service';
import { CoinsService } from '../coins.service';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { admin_deposite_withdraw_coins_ids_by_request_id, Iadmin_deposite_withdraw_coins_ids_by_request_id } from 'src/app/Shared/Modals/Coins/admin_deposite_withdraw_coins_ids_by_request_id';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-admin-deposite-coins-to-id-request-id',
  templateUrl: './admin-deposite-coins-to-id-request-id.component.html',
  styleUrls: ['./admin-deposite-coins-to-id-request-id.component.css']
})
export class AdminDepositeCoinsToIdRequestIdComponent {
  obj: any;
  
  sitePath: string;
  DepositeCoinsToIdsForm: FormGroup;
  submitted = false;
  _sessionUser: bigint;
  returnType: any;
  depositeobj: Iadmin_deposite_withdraw_coins_ids_by_request_id 
      = new admin_deposite_withdraw_coins_ids_by_request_id();

  constructor(public bsModalRef:BsModalRef, private formBuilder: FormBuilder,
    private router:Router, public authservice: AuthService
    , private coinsService: CoinsService, private toasterService: ToastrService){
      this.DepositeCoinsToIdsForm = this.formBuilder.group({
        userNumber: ['', [Validators.required]],
        coins: ['', [Validators.required]]
       },
     )
     this.sitePath = environment.imagePath.sitePath;
     this._sessionUser = authservice.user.userId;
 }

 DepositeCoinsToIds() {
  this.submitted = true;
  
  if (this.DepositeCoinsToIdsForm?.invalid) {
    return;
  } 
  this.depositeobj.userId = this.obj.userId;
  this.depositeobj.siteId = this.obj.siteId;
  this.depositeobj.sessionUser = this._sessionUser;
  this.depositeobj.coins = this.obj.coins;
  this.depositeobj.coinType = 0;
  this.depositeobj.coinsRequestId = this.obj.coinsRequestId;
  
  this.coinsService.deposite_withdraw_coins_to_ids(this.depositeobj).subscribe(resp => {
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
