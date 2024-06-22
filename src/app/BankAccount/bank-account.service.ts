import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { AddUserBankAccountComponent } from './user_bank_account/add_user_bank_account/add-user-bank-account.component';
import { Iadd_bank_account } from '../Shared/Modals/BankAccount/add_bank_account';
import { Iadd_admin_bank_account, add_admin_bank_account } from '../Shared/Modals/BankAccount/add_admin_bank_account';
import { AddAdminBankAccountComponent } from './admin_bank_account/add-admin-bank-account/add-admin-bank-account.component';
import { apiService } from '../api.service';
import { AddAdminUPIComponent } from './admin_bank_account/add-Admin-UPI/add-admin-upi.component';
import { AddAdminQRComponent } from './admin_bank_account/add-admin-QR/add-admin-qr.component';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  bsmodalRef?: BsModalRef;
  constructor(private bsModalService:BsModalService,private http: HttpClient, private apiService:apiService) { }

OpenUserBankAccountPopup(isupdate: boolean, obj: Iadd_bank_account){
  const initalstate: ModalOptions = {
    initialState:{
      isupdate,
      obj 
    }
  }
  
  this.bsmodalRef = this.bsModalService.show(AddUserBankAccountComponent, initalstate);
}

OpenAddAdminBankAccountPopup(isupdate: boolean, obj: Iadd_admin_bank_account = new add_admin_bank_account()){
  const initalstate: ModalOptions = {
    initialState:{
      isupdate,
      obj 
    }
  }
  
  this.bsmodalRef = this.bsModalService.show(AddAdminBankAccountComponent, initalstate);
}

OpenAddAdminUpiPopup(isupdate: boolean, obj: Iadd_admin_bank_account = new add_admin_bank_account()){
  const initalstate: ModalOptions = {
    initialState:{
      isupdate,
      obj 
    }
  }
  
  this.bsmodalRef = this.bsModalService.show(AddAdminUPIComponent, initalstate);
}

OpenAddAdminQRPopup(isupdate: boolean, obj: Iadd_admin_bank_account = new add_admin_bank_account()){
  const initalstate: ModalOptions = {
    initialState:{
      isupdate,
      obj 
    }
  }
  
  this.bsmodalRef = this.bsModalService.show(AddAdminQRComponent, initalstate);
}

list_User_Bank_Accounts(obj: any){
  return this.apiService.GetBankAccounts(obj);
}

Add_Bank_Account(obj: any){
  return this.apiService.AddBankAccount(obj);
}



list_Admin_Bank_Accounts(){
  return this.apiService.AdminBankAccounts();
}

list_admin_upi_accounts(){
  return this.apiService.GetAdminUpiAccounts();
}

list_admin_QR_accounts(){
  return this.apiService.GetAdminQRCode();
}

Add_Admin_Bank_Account(obj: any){
  return this.apiService.AddUpdateAdminBankAccount(obj);
}

add_update_admin_upi(obj: any){
  return this.apiService.AddUpdateAdminUpiAccount(obj);
}

add_admin_qr(obj: any){
  return this.apiService.AddAdminQRCode(obj);
}

}
