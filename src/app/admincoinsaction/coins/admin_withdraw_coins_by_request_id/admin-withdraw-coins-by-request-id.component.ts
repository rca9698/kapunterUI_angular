import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { CoinsService } from '../coins.service';
import { Iadmin_withdraw_coins_by_request_id, admin_withdraw_coins_by_request_id } from 'src/app/Shared/Modals/Coins/admin_withdraw_coins_by_request_id';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin-withdraw-coins-by-request-id',
  templateUrl: './admin-withdraw-coins-by-request-id.component.html',
  styleUrls: ['./admin-withdraw-coins-by-request-id.component.css']
})
export class AdminWithdrawCoinsByRequestIdComponent {
  obj: any;

   WithdrawCoinsByRequestIDFrom: FormGroup;
   submitted : boolean = false;
   file: any = null;
   isupdate: boolean = false;
   withdrawobj: Iadmin_withdraw_coins_by_request_id 
   = new admin_withdraw_coins_by_request_id();
   returnType: any;
   _sessionUser: bigint;
  
   @ViewChild('imageInput') fileInput: any

  processFile(imageInput: any) {
    this.file = imageInput.files[0];
  }

  constructor(public bsModalRef:BsModalRef, private formBuilder:FormBuilder, 
    private router:Router, private coinsService: CoinsService, 
    private toasterService: ToastrService, public authservice: AuthService){
      this.WithdrawCoinsByRequestIDFrom = this.formBuilder.group({
        userNumber: ['', [Validators.required]],
        coins: ['', [Validators.required]],
       },
     )
     this._sessionUser = authservice.userdetail.userId;
  }
  ngOnInit(): void {
    
  }

  withdraw_coins_by_request_id(){
    this.submitted = true;
    
  if(this.WithdrawCoinsByRequestIDFrom.invalid || !this.file) {
    return;
  }

  let formParams = new FormData();
  formParams.append('File', this.file);
  formParams.append('coinsRequestId',  this.obj.coinsRequestId?.toString());
  formParams.append('userId', this.obj.userId?.toString());
  formParams.append('coins', this.obj.coins.toString());
  formParams.append('coinType', this.obj.coinType.toString());
  formParams.append('sessionUser', this._sessionUser.toString());

    this.coinsService.withdraw_coins_by_request_id(formParams).subscribe(resp => {
      console.log(resp);
      this.returnType = resp;
      if(this.returnType['returnStatus'] == 1){
        this.toasterService.success(this.returnType.returnMessage);
        this.bsModalRef.hide();
        this.router.navigate(['/adminaction/coins/withdraw-list']);
      }else{
        this.toasterService.warning(this.returnType.returnMessage);
      }
    })
  }
}
