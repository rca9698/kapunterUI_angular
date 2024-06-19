import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { AddUserBankAccountComponent } from './user_bank_account/add_user_bank_account/add-user-bank-account.component';
import { Iadd_bank_account } from '../Shared/Modals/BankAccount/add_bank_account';
import { Iadd_admin_bank_account, add_admin_bank_account } from '../Shared/Modals/BankAccount/add_admin_bank_account';
import { AddAdminBankAccountComponent } from './admin_bank_account/add-admin-bank-account/add-admin-bank-account.component';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  bsmodalRef?: BsModalRef;
  constructor(private bsModalService:BsModalService,private http: HttpClient) { }

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

list_Admin_Bank_Accounts(){
  return this.http.get( `${environment.apiUrl}`);
}


list_User_Bank_Accounts(){
  return this.http.get( `${environment.apiUrl}`);
}
}
