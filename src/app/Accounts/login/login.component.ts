import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  SendOtpForm: FormGroup;
  LoginForm: FormGroup;
  submitted = false;
  passwordType = "password";
  usersQuery: any = {
    SessionUser: BigInt
  };

  showOtp: boolean = true;
  showPassword: boolean = false;
  showMobileModalForm: boolean = true;
  showOtpPasswordModalForm: boolean = false;
  backButtonVisibility: boolean = false;

  constructor(public bsModalRef:BsModalRef, private formBuilder: FormBuilder,
    private router:Router, private accountService: AccountsService){
      this.SendOtpForm = this.formBuilder.group({
        userNumber: ['', [Validators.required]]
       },
     )
     
     this.LoginForm = this.formBuilder.group({
      otp: ['', [Validators.required]]
     },
   )
  
 }

 LoadPassword(){
this.showPassword = true;
this.showOtp = false;
this.submitted = false;
this.LoginForm = this.formBuilder.group({
  password: ['', [Validators.required]]
 });
 }

 ViewPassword(){
  if(this.passwordType == "password"){
    this.passwordType = "text";
  }else{
    this.passwordType = "password";
  }
 }

 LoadOTP(){
  this.showOtp = true;
  this.showPassword = false;
  this.submitted = false;
  this.LoginForm = this.formBuilder.group({
    otp: ['', [Validators.required]]
   });
 }

 LoginToApp(){
  this.submitted = true;

  this.accountService.login(this.LoginForm.value).subscribe({
    next:(response) =>{
      console.log(response);
    },
    error:error => {
      console.log(error);
    }
  })

  this.bsModalRef.hide();
  this.router.navigate(['/account/user_list']);
 }

 SendOtp(){
  this.submitted = true;

  if(this.SendOtpForm?.invalid) {
    return;
  }

  if (this.SendOtpForm?.valid) {
    this.showOtpPasswordModalForm = true;
    this.showMobileModalForm = false;
    this.showPassword = false;
    this.submitted = false;
    this.backButtonVisibility = true; 

    this.accountService.sendOtp(this.SendOtpForm.value).subscribe({
      next:(response) =>{
        console.log(response);
      },
      error:error => {
        console.log(error);
      }
    })
  }
 }

 backToMobileNumber(){
    this.showOtpPasswordModalForm = false;
    this.showMobileModalForm = true;
    this.showPassword = false;
    this.submitted = false;
    this.backButtonVisibility = false;
 }

}
