import { Component } from '@angular/core';
import { BankAccountService } from '../../bank-account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { Iadd_admin_bank_account, add_admin_bank_account } from 'src/app/Shared/Modals/BankAccount/add_admin_bank_account';

@Component({
  selector: 'app-add-admin-bank-account',
  templateUrl: './add-admin-bank-account.component.html',
  styleUrls: ['./add-admin-bank-account.component.css']
})
export class AddAdminBankAccountComponent {
  submitted : boolean = false;
  addAdminBankAccountForm: FormGroup;
  add_admin_bank_account: Iadd_admin_bank_account = new add_admin_bank_account();

  constructor(public bsModalRef:BsModalRef, private formBuilder:FormBuilder, 
    private router:Router, private sitesService: BankAccountService, 
    private toasterService: ToastrService){ 
      this.addAdminBankAccountForm = this.formBuilder.group({
        BName: ['', [Validators.required]],
        ANumber: ['', [Validators.required]],
        AHName: ['', [Validators.required]],
        IFSCCode: ['', [Validators.required]]
       },
     )
    }

    AddAdminBankAccount() {
      this.submitted = true;
    }

}
