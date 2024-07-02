import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IdsRoutingModule } from './ids-routing.module';
import { IdRequestListComponent } from './id-request-list/id-request-list.component';
import { AdminCreateIdComponent } from './admin-create-id/admin-create-id.component';



@NgModule({
  declarations: [
    IdRequestListComponent,
    AdminCreateIdComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IdsRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ]
})
export class IdsModule { }
