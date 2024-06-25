import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListSitesComponent } from './listSites/list-sites.component';
import { UserListSitesComponent } from './userListSites/user-list-sites.component';

const routes : Routes = [
  { path: 'list-sites', component: ListSitesComponent },
  { path: 'user-list-sites', component: UserListSitesComponent }
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
