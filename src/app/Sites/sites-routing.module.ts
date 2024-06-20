import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListSitesComponent } from './listSites/list-sites.component';
import { UserListComponent } from '../Accounts/User/user-list/user-list.component';

const routes : Routes = [
  { path: 'list-sites', component: ListSitesComponent },
  { path: 'user-list-sites', component: UserListComponent }
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
export class SitesRoutingModule { }
