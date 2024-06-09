import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BankAccountService } from '../../bank-account.service';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-bank-account',
  templateUrl: './add-user-bank-account.component.html',
  styleUrls: ['./add-user-bank-account.component.css']
})
export class AddUserBankAccountComponent {
  submitted : boolean = false;
  constructor(public bsModalRef:BsModalRef, private formBuilder:FormBuilder, 
    private router:Router, private sitesService: BankAccountService, 
    private toasterService: ToastrService){ }

}
