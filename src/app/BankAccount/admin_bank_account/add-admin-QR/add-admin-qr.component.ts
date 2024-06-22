import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Iadd_admin_bank_account, add_admin_bank_account } from 'src/app/Shared/Modals/BankAccount/add_admin_bank_account';
import { BankAccountService } from '../../bank-account.service';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin-qr',
  templateUrl: './add-admin-qr.component.html',
  styleUrls: ['./add-admin-qr.component.css']
})
export class AddAdminQRComponent {
  submitted : boolean = false;
  addAdminQrForm: FormGroup;
  add_admin_upi: Iadd_admin_bank_account = new add_admin_bank_account();
  returnType: any;

  constructor(public bsModalRef:BsModalRef, private formBuilder:FormBuilder, 
    private router:Router, private bankAccountService: BankAccountService, 
    private toasterService: ToastrService, private authservice: AuthService){ 
      this.addAdminQrForm = this.formBuilder.group({
        UpiName: ['', [Validators.required]],
        UpiId: ['', [Validators.required]], 
       },
     )
    }

    AddAdminQR() {
      this.submitted = true;

      if(this.addAdminQrForm.invalid) {
        return;
      }

      this.add_admin_upi.userId = this.authservice.user.userId;
      this.add_admin_upi.sessionUser = this.authservice.user.userId;
 
      this.bankAccountService.add_update_admin_upi(this.add_admin_upi).subscribe(resp => {
        this.returnType = resp;
        if(this.returnType['returnStatus'] == 1){
          this.toasterService.success(this.returnType.returnMessage);
          this.bsModalRef.hide();
          this.router.navigate(['/bankAccount/list-admin-qr']);
        } else {
          this.toasterService.warning(this.returnType.returnMessage);
        }
      });

    }
}
