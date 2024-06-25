import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-deposite-coins-by-user-id',
  templateUrl: './deposite-coins-by-user-id.component.html',
  styleUrls: ['./deposite-coins-by-user-id.component.css']
})
export class DepositeCoinsByUserIdComponent {
  DepositCoinsByUserIdForm: FormGroup;
  userNumber: string | undefined ;
  submitted = false;

  constructor(public bsModalRef:BsModalRef, private formBuilder: FormBuilder,
    private router:Router){
      this.DepositCoinsByUserIdForm = this.formBuilder.group({
        coins: ['', [Validators.required]]
       },
     )
 }

 SendDepositCoinsByUserId() {
  this.submitted = true;
  
  if (this.DepositCoinsByUserIdForm?.invalid) {
    return;
  }
  this.bsModalRef.hide();
 }

}
