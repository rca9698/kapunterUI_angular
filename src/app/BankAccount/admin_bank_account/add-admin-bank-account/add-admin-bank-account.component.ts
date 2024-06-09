import { Component } from '@angular/core';
import { BankAccountService } from '../../bank-account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/toastr/toastr.service';

@Component({
  selector: 'app-add-admin-bank-account',
  templateUrl: './add-admin-bank-account.component.html',
  styleUrls: ['./add-admin-bank-account.component.css']
})
export class AddAdminBankAccountComponent {
  submitted : boolean = false;
  addAdminBankAccountForm: FormGroup;

  constructor(public bsModalRef:BsModalRef, private formBuilder:FormBuilder, 
    private router:Router, private sitesService: BankAccountService, 
    private toasterService: ToastrService){ 
      this.addAdminBankAccountForm = this.formBuilder.group({
        userNumber: ['', [Validators.required]]
       },
     )
    }

    AddAdminBankAccount() {
      
    }

}
