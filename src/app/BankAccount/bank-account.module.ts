import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAdminBankAccountComponent } from './AdminBankAccount/list-admin-bank-account/list-admin-bank-account.component';
import { AddAdminBankAccountComponent } from './AdminBankAccount/add-admin-bank-account/add-admin-bank-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from '../Accounts/account-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    ListAdminBankAccountComponent,
    ListAdminBankAccountComponent,
    AddAdminBankAccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports:[
    ReactiveFormsModule
  ]
})
export class BankAccountModule { }
