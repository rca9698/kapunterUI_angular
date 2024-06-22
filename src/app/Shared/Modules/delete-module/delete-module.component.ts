import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SitesService } from 'src/app/Sites/sites.service';
import { apiService } from 'src/app/api.service';
import { ToastrService } from 'src/app/toastr/toastr.service';

@Component({
  selector: 'app-delete-module',
  templateUrl: './delete-module.component.html',
  styleUrls: ['./delete-module.component.css']
})
export class DeleteModuleComponent {
  deleteType: string = '';
  title: string = ''
  obj: any;

  returnType: any;
  returnValue: any;
  returnStatus: any;

  constructor(public bsModalRef:BsModalRef, 
    private router:Router, private toasterService: ToastrService, private apiservices:apiService){
      
  }



  deleteData(){
    switch(this.deleteType){
      case 'site':
        this.SiteDelete();
        break;
      case 'user':
        this.UserDelete();
        break;
      case 'adminbank':
        this.AdminBankAccountDelete();
        break;
      case 'adminupi':
        this.AdminUpiDelete();
        break;
      case 'adminqr':
        this.AdminQRDelete();
        break;
    }
  }

  SiteDelete(){
    this.apiservices.DeleteSite(this.obj).subscribe(resp=>{
      this.returnType = resp;
      this.toastrMessages();
    });
  }

  UserDelete(){
    this.apiservices.DeleteUser(this.obj).subscribe(resp=>{
      this.returnType = resp;
      this.toastrMessages();
    });
  }

  IDDelete(){
    this.apiservices.DeleteID(this.obj).subscribe(resp=>{
      this.returnType = resp;
      this.toastrMessages();
    });
  }

  IDRequestDelete(){
    this.apiservices.DeleteIDRequest(this.obj).subscribe(resp=>{
      this.returnType = resp;
      this.toastrMessages();
    });
  }

  DashboardImagesDelete(){
    this.apiservices.DeleteDashboardImages(this.obj).subscribe(resp=>{
      this.returnType = resp;
      this.toastrMessages();
    });
  }

  BankAccountDelete(){
    this.apiservices.DeleteBankAccount(this.obj).subscribe(resp=>{
      this.returnType = resp;
      this.toastrMessages();
    });
  }

  AdminBankAccountDelete(){
    this.apiservices.DeleteAdminBankAccount(this.obj).subscribe(resp=>{
      this.returnType = resp;
      this.toastrMessages();
    });
  }

  AdminUpiDelete(){
    this.apiservices.DeleteAdminUpiAccount(0 as unknown as bigint,'').subscribe(resp=>{
      this.returnType = resp;
      this.toastrMessages();
    });
  }

  AdminQRDelete(){
    this.apiservices.DeleteAdminUpiAccount(0 as unknown as bigint,'').subscribe(resp=>{
      this.returnType = resp;
      this.toastrMessages();
    });
  }

  

  toastrMessages(){
    this.returnStatus = this.returnType['returnStatus']; 
    if(this.returnStatus == 1){
      this.toasterService.success(this.returnType['returnMessage']);
    }else{
      this.toasterService.warning(this.returnType['returnMessage']);
    }
    this.bsModalRef.hide()
  }

}
