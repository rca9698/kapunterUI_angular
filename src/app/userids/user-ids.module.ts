import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIdRoutingModule } from './user-id-routing.module';
import { ListUserIdComponent } from './listuserids/list-user-ids.component';
import { CreateIdsComponent } from './createid/create-ids.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [ 
    ListUserIdComponent,
    CreateIdsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserIdRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports:[
    ReactiveFormsModule
  ]
})
export class UserIdsModule { }
