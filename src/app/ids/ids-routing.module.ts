import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordRequestsComponent } from './change-password-requests/change-password-requests.component';
import { CloseIdRequestsComponent } from './close-id-requests/close-id-requests.component';
import { ListIdRequestsComponent } from './list-id-requests/list-id-requests.component';
import { RejectedIdRequestsComponent } from './rejected-id-requests/rejected-id-requests.component';
import { ListIdsComponent } from './list-ids/list-ids.component';

const route: Routes = [
  {path: 'change-password-requests', component: ChangePasswordRequestsComponent },
  {path: 'close-id-requests', component: CloseIdRequestsComponent },
  {path: 'list-id-requests', component: ListIdRequestsComponent },
  {path: 'list-ids', component: ListIdsComponent },
  {path: 'rejected-id-requests', component: RejectedIdRequestsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class IdsRoutingModule { }
