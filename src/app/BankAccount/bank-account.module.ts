import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAdminBankAccountComponent } from './admin_bank_account/list-admin-bank-account/list-admin-bank-account.component';
import { AddAdminBankAccountComponent } from './admin_bank_account/add-admin-bank-account/add-admin-bank-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from '../Accounts/account-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListUserBankAccountComponent } from './user_bank_account/list_user_bank_account/list-user-bank-account.component';
import { AddUserBankAccountComponent } from './user_bank_account/add_user_bank_account/add-user-bank-account.component';
import { BankAccountRoutingModule } from './bank-account-routing.module';
import { ListAdminUPIComponent } from './admin_bank_account/list-admin-UPI/list-admin-upi.component';
import { AddAdminQRComponent } from './admin_bank_account/add-admin-QR/add-admin-qr.component';
import { AddAdminUPIComponent } from './admin_bank_account/add-Admin-UPI/add-admin-upi.component';
import { ListAdminQRComponent } from './admin_bank_account/list-admin-QR/list-admin-qr.component';



@NgModule({
  declarations: [
    AddAdminBankAccountComponent,
    AddUserBankAccountComponent,
    AddAdminQRComponent,
    AddAdminUPIComponent,
    ListAdminBankAccountComponent,
    ListAdminQRComponent,
    ListAdminUPIComponent,
    ListUserBankAccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BankAccountRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports:[
    ReactiveFormsModule
  ]
})
export class BankAccountModule { 
  
}
