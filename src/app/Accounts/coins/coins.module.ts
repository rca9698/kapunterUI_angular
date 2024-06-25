import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositeCoinsByUserIdComponent } from '../../userids/deposite_coins_by_user_id/deposite-coins-by-user-id.component';
import { WithdrawCoinsUserIdComponent } from '../../userids/withdraw_coins_user_id/withdraw-coins-user-id.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountRoutingModule } from '../account-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DepositeListComponent } from './deposite_list/deposite-list.component';
import { WithdrawListComponent } from './withdraw_list/withdraw-list.component';
import { DepositeToSiteListComponent } from './deposite_to_site_list/deposite-to-site-list.component';
import { WithdrawFromSiteListComponent } from './withdraw_from_site_list/withdraw-from-site-list.component';
import { CoinsRoutingModule } from './coins-routing.module';
import { DepositeCoinsRequestComponent } from './deposite-coins-request/deposite-coins-request.component';
import { WithdrawCoinsRequestComponent } from './withdraw-coins-request/withdraw-coins-request.component';



@NgModule({
  declarations: [
    DepositeCoinsByUserIdComponent,
    WithdrawCoinsUserIdComponent,
    DepositeListComponent,
    WithdrawListComponent,
    DepositeToSiteListComponent,
    WithdrawFromSiteListComponent,
    DepositeCoinsRequestComponent,
    WithdrawCoinsRequestComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoinsRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports:[
    ReactiveFormsModule
  ]
})
export class CoinsModule { }
