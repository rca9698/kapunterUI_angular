import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserIdsService } from '../user-ids.service';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { AddIDRequest, IAddIDRequest } from 'src/app/Shared/Modals/Ids/add-ids-request';

@Component({
  selector: 'app-create-ids',
  templateUrl: './create-ids.component.html',
  styleUrls: ['./create-ids.component.css']
})
export class CreateIdsComponent {
  AddIdsFrom: FormGroup;
  submitted : boolean = false;
  addIDRequest : IAddIDRequest = new AddIDRequest();

  constructor(public bsModalRef:BsModalRef, private formBuilder:FormBuilder, 
    private router:Router, private useridsservice: UserIdsService, 
    private toasterService: ToastrService){
      this.AddIdsFrom = this.formBuilder.group({
        Username: ['', [Validators.required]]
       },
     )
  }


  
public getSiteList(obj: any){
  return this.useridsservice.AddIDRequest(obj)
}

  AddUserId() {
    this.submitted = true;
    
    if(this.AddIdsFrom.invalid) {
      return;
    } 

    this.addIDRequest.userName = this.AddIdsFrom.value["username"].toString();

    this.useridsservice.AddIDRequest(this.addIDRequest)?.subscribe({
      next:(response)=>{
        this.bsModalRef.hide();
        this.router.navigate(['/userids/list-user-ids'])
      }}
    ); 
     
    }
  } 