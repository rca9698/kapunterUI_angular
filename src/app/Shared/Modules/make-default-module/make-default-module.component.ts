import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { apiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'src/app/toastr/toastr.service';

@Component({
  selector: 'app-make-default-module',
  templateUrl: './make-default-module.component.html',
  styleUrls: ['./make-default-module.component.css']
})
export class MakeDefaultModuleComponent {
  makeDefaultType: string = '';
  title: string = ''
  obj: any;

  returnType: any;
  returnValue: any;
  returnStatus: any;

  constructor(public bsModalRef:BsModalRef, 
    private router:Router, private toasterService: ToastrService
    , private apiservices:apiService, private authService: AuthService){
      
  }

  makedefault(){
    switch(this.makeDefaultType){
      case 'adminbank':
        this.make_admin_bank_account_default();
        break;
      case 'adminupi':
        this.make_admin_upi_default();
        break;
      case 'adminqr':
        this.make_admin_upi_default();
        break;
      case 'userbank':
        this.make_user_bank_account_default();
        break;
    }
  }

  make_admin_bank_account_default(){
    this.apiservices.SetDefaultAdminBankAccount(this.obj).subscribe(resp=>{
      this.returnType = resp;
      this.toastrMessages();
    });
  }

  make_admin_upi_default(){
    this.apiservices.SetDefaultAdminUpiAccount(this.obj).subscribe(resp=>{
      this.returnType = resp;
      this.toastrMessages();
    });
  }

  make_admin_qr_default(){
    this.apiservices.SetDefaultAdminQr(this.obj).subscribe(resp=>{
      this.returnType = resp;
      this.toastrMessages();
    });
  }

  make_user_bank_account_default(){
    this.apiservices.SetDefaultBankAccount(this.authService.user.userId, this.obj.bankAccountDetailID).subscribe(resp=>{
      this.returnType = resp;
      this.toastrMessages();
    });
  }

  toastrMessages(){
    this.returnStatus = this.returnType['returnStatus']; 
    if(this.returnStatus == 1){
      this.toasterService.success(this.returnType['returnMessage']);
    }else{
      this.toasterService.warning(this.returnType['returnMessage']);
    }
    this.bsModalRef.hide()
  }

}
