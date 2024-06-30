import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSiteComponent } from './addSite/add-site.component';
import { DeleteSiteComponent } from './delete-site/delete-site.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountRoutingModule } from '../Accounts/account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListSitesComponent } from './listSites/list-sites.component';
import { GetUserListSiteByIdComponent } from './getUserListSiteById/get-user-list-site-by-id.component';
import { SitesRoutingModule } from './sites-routing.module';
import { UserListSitesComponent } from './userListSites/user-list-sites.component';



@NgModule({
  declarations: [
    AddSiteComponent,
    DeleteSiteComponent,
    ListSitesComponent,
    UserListSitesComponent,
    GetUserListSiteByIdComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SitesRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports:[
    ReactiveFormsModule
  ]
})
export class SitesModule { }
