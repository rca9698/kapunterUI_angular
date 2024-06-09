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



@NgModule({
  declarations: [
    ListAdminBankAccountComponent,
    AddAdminBankAccountComponent,
    ListUserBankAccountComponent,
    AddUserBankAccountComponent
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
export class BankAccountModule { }
