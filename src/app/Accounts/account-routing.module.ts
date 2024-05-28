import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './User/user-list/user-list.component';
import { DeletedUserListComponent } from './User/deleted-user-list/deleted-user-list.component';
import { IdRequestListComponent } from './Ids/id-request-list/id-request-list.component';
import { DeletedIdRequestListComponent } from './Ids/deleted-id-request-list/deleted-id-request-list.component';

const routes : Routes = [
  { path: 'if_request_list', component: IdRequestListComponent },
  { path: 'deleted_id_request_list', component: DeletedIdRequestListComponent },
  { path: 'user_list', component: UserListComponent },
  { path: 'deleted_user_list', component: DeletedUserListComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule { }
