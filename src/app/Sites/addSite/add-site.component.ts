import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SitesService } from '../sites.service';
import { ToastrService } from 'src/app/toastr/toastr.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent {
  AddSiteFrom: FormGroup;
  submitted : boolean = false;
   file: any = null;
   isupdate: boolean = false;
   siteId: number | undefined;
   returnType: any;
  
   @ViewChild('imageInput') fileInput: any

  processFile(imageInput: any) {
    this.file = imageInput.files[0];
  }

  constructor(public bsModalRef:BsModalRef, private formBuilder:FormBuilder, 
    private router:Router, private sitesService: SitesService, 
    private toasterService: ToastrService){
      this.AddSiteFrom = this.formBuilder.group({
        siteName: ['', [Validators.required]],
        siteURL: ['', [Validators.required]]
       },
     )
  }

  AddSite(){
    this.submitted = true;
    console.log(this.file);
    
  if(this.AddSiteFrom.invalid || !this.file) {
    return;
  }

    this.sitesService.uploadfile(this.file).subscribe(resp => {
      console.log(resp);
      this.returnType = resp;
      if(this.returnType['returnStatus'] == 1){
        this.toasterService.success(this.returnType.returnMessage);
        this.bsModalRef.hide();
        this.router.navigate(['/site/app-list-sites']);
      }else{
        this.toasterService.warning(this.returnType.returnMessage);
      }
    })
  }

}
