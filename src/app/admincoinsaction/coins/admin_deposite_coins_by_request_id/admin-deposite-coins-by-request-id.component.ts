import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/auth.service';

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

  constructor(public bsModalRef:BsModalRef, private formBuilder: FormBuilder,
    private router:Router, public authservice: AuthService){
      this.DepositCoinsByRequestIdForm = this.formBuilder.group({
        coins: ['', [Validators.required]]
       },
     )
 }

 SendDepositCoinsByRequestId() {
  this.submitted = true;
  
  if (this.DepositCoinsByRequestIdForm?.invalid) {
    return;
  }
  this.bsModalRef.hide();
 }
}
