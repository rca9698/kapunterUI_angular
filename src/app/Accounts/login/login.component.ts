import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  
  isSuccess: boolean = true;
  title: string = '';
  
  constructor(public bsModalRef:BsModalRef, private formBuilder: FormBuilder,
    private router:Router, private accountService: AccountsService){
     this.loginForm = this.formBuilder.group({
       username: ['', [Validators.required]],
       password: ['', [Validators.required]],
     },
   )
 }

 login(){
  this.submitted = true;

  if (this.loginForm?.invalid) {
    return;
  }
  
  if (this.loginForm?.valid) {
    console.log(JSON.stringify(this.loginForm.value, null, 2));

    this.accountService.login(this.loginForm.value).subscribe({
      next:(response) =>{
        console.log(response);
      },
      error:error => {
        console.log(error);
      }
    })

  }
 }
 
}
