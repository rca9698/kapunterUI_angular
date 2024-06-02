import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SitesService } from '../sites.service';

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
  
  processFile(imageInput: any) {
    this.file = imageInput.files[0];
  }

  constructor(public bsModalRef:BsModalRef, private formBuilder:FormBuilder, 
    private router:Router, private sitesService: SitesService){
      this.AddSiteFrom = this.formBuilder.group({
        siteName: ['', [Validators.required]],
        siteURL: ['', [Validators.required]],
        files: ['', [Validators.required]]
       },
     )
  }

  AddSite(){
    this.submitted = true;
    console.log(this.file);
    this.sitesService.uploadfile(this.file).subscribe(resp => {
      alert("Uploaded")
    })
  }

}
