import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccountsService } from '../accounts.service';
import { otp_Login_Model } from 'src/app/Shared/Modals/otp_Login_Model';
import { ToastrService } from '../../toastr/toastr.service';
import { environment } from 'src/environments/environment.development';
 
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
  returnType: any;
  otp_Login_Modal: otp_Login_Model | undefined;
  returnTypeClient: ReturnType<any>;
  mobileNumber: any;

  usersQuery: any = {
    SessionUser: BigInt
  };

  showOtp: boolean = true;
  showPassword: boolean = false;
  showMobileModalForm: boolean = true;
  showOtpPasswordModalForm: boolean = false;
  backButtonVisibility: boolean = false;

  constructor(public bsModalRef:BsModalRef, private formBuilder: FormBuilder,
    private router:Router, private accountService: AccountsService, 
    private toasterService: ToastrService){
      this.SendOtpForm = this.formBuilder.group({
        userNumber: ['', [Validators.required]]
       },
     )
     
     this.LoginForm = this.formBuilder.group({
      userNumber: ['', [Validators.required]],
      otp: ['', [Validators.required]]
     },
   )
  
 }

 LoadPassword() {
this.showPassword = true;
this.showOtp = false;
this.submitted = false;
this.LoginForm = this.formBuilder.group({
  userNumber: ['', [Validators.required]],
  password: ['', [Validators.required]]
 });
 }

 ViewPassword() {
  if(this.passwordType == "password"){
    this.passwordType = "text";
  }else{
    this.passwordType = "password";
  }
 }

 SendOtp() {
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
    this.mobileNumber = this.SendOtpForm.value["userNumber"];

    this.accountService.sendOtp(this.mobileNumber).subscribe({
      next:(response) =>{
        this.returnType = response;
        this.otp_Login_Modal = this.returnType['returnVal'];
        this.returnTypeClient = Object.create(null);
        if(environment.environment == 'dev') {
        this.returnTypeClient.returnMessage = `OTP sent to your Mobile Number - ${this.otp_Login_Modal?.otp}!!"`;
        }

       this.toasterService.success(this.returnTypeClient.returnMessage);
      },
      error:(error: any) => {
        console.log(error);
      }
    })
  }
 }
 
 LoadOTP(){
  this.showOtp = true;
  this.showPassword = false;
  this.submitted = false;
  this.LoginForm = this.formBuilder.group({
    userNumber: ['', [Validators.required]],
    otp: ['', [Validators.required]]
   });
 }

 LoginToApp() {
  this.submitted = true;
  
  if(this.LoginForm.invalid) {
    return;
  }

  this.accountService.login(this.LoginForm.value).subscribe({
    next:(response) =>{
      console.log(response);
    this.bsModalRef.hide();
    this.router.navigate(['/account/user_list']);
    },
    error:error => {
      console.log(error);
    }
  })

 }

 backToMobileNumber(){
    this.showOtpPasswordModalForm = false;
    this.showMobileModalForm = true;
    this.showPassword = false;
    this.submitted = false;
    this.backButtonVisibility = false;
 }

}
