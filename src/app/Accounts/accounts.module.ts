import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './User/user-list/user-list.component';
import { DeletedUserListComponent } from './User/deleted-user-list/deleted-user-list.component';
import { IdRequestListComponent } from './Ids/id-request-list/id-request-list.component';
import { DeletedIdRequestListComponent } from './Ids/deleted-id-request-list/deleted-id-request-list.component';
import { DeletedIdsListComponent } from './Ids/deleted-ids-list/deleted-ids-list.component';
import { IdsListComponent } from './Ids/ids-list/ids-list.component';

@NgModule({
  declarations: [
    UserListComponent,
    DeletedUserListComponent,
    IdRequestListComponent,
    DeletedIdRequestListComponent,
    DeletedIdsListComponent,
    IdsListComponent
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
export class AccountsModule { 

}
