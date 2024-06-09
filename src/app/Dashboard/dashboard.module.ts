import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports:[
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
