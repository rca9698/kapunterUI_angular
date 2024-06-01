import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositeCoinsByUserIdComponent } from './depositeCoinsByUserId/deposite-coins-by-user-id.component';
import { WithdrawCoinsUserIdComponent } from './WithdrawCoinsUserId/withdraw-coins-user-id.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountRoutingModule } from '../account-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    DepositeCoinsByUserIdComponent,
    WithdrawCoinsUserIdComponent
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
export class CoinsModule { }
