import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccountsService } from '../accounts.service';
import { otp_Login_Model } from 'src/app/Shared/Modals/otp_Login_Model';
import { ToastrService } from '../../toastr/toastr.service';
import { environment } from 'src/environments/environment.development';
import { login } from 'src/app/Shared/Modals/login';
import { AuthService } from 'src/app/auth.service';
import { BehaviorSubject } from 'rxjs';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  SendOtpForm: FormGroup;
  LoginForm: FormGroup;
  submitted = false;
  role = 'ben';
  passwordType = "password";
  returnType: any;
  otp_Login_Modal: otp_Login_Model | undefined;
  returnTypeClient: ReturnType<any>;
  logintype: string = 'USER LOGIN';
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
    private toasterService: ToastrService, private authservice: AuthService){
      this.SendOtpForm = this.formBuilder.group({
        userNumber: ['', [Validators.required]]
       },
     )
     
     this.LoginForm = this.formBuilder.group({
      otp: ['', [Validators.required]]
     },
   )
 }

 SendOtp() {
  this.submitted = true;

  if(this.SendOtpForm?.invalid) {
    return;
  }

  if (this.SendOtpForm?.valid) {
    this.accountService.sendOtp(this.SendOtpForm.value["userNumber"]).subscribe({
      next:(response) =>{
        this.returnType = response;
        console.log(this.returnType);
        this.otp_Login_Modal = this.returnType['returnVal'];
        this.returnTypeClient = Object.create(null);
        if(environment.environment == 'dev') {
        this.returnTypeClient.returnMessage = `OTP sent to your Mobile Number - ${this.otp_Login_Modal?.otp}!!"`;
        }
        if(this.otp_Login_Modal?.role == 'admin'){
          if(environment.isAdminSite == true)
            {
              this.logintype = 'ADMIN LOGIN'
              this.showOtpPasswordModalForm = true;
              this.showMobileModalForm = false;
              this.showPassword = true;
              this.submitted = false;
              this.backButtonVisibility = true;
              this.LoadPassword();
            }
          else
            this.toasterService.warning('Admin accounts are not allowed!!!');
        }else{
          this.LoadOTP();
          this.showOtpPasswordModalForm = true;
          this.showMobileModalForm = false;
          this.showPassword = false;
          this.submitted = false;
          this.backButtonVisibility = true; 

          if(this.returnType["returnStatus"] == 1){
            this.toasterService.success(this.returnType["returnMessage"]);
          }else{
            this.toasterService.warning(this.returnType["returnMessage"]);
          }
          
        }
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
    otp: ['', [Validators.required]]
   });
 }

 LoadPassword() {
  this.showPassword = true;
  this.showOtp = false;
  this.submitted = false;
  this.LoginForm = this.formBuilder.group({
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

 LoginToApp() {
  this.submitted = true;
  
  if(this.LoginForm.invalid) {
    return;
  }

  let login: login = Object.create(null);
  login.UserNumber = this.SendOtpForm.value["userNumber"].toString();
  login.OTP = this.LoginForm.value['otp'];
  login.Password = this.LoginForm.value['password'];

  this.authservice.login(login)?.subscribe({
    next:(response)=>{
      this.bsModalRef.hide();
    }}
  );
 }

 backToMobileNumber(){
    this.showOtpPasswordModalForm = false;
    this.showMobileModalForm = true;
    this.showPassword = false;
    this.submitted = false;
    this.backButtonVisibility = false;
 }

}
