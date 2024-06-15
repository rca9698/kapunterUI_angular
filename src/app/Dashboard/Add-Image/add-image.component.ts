import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DashboardService } from '../dashboard.service';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent {
    title: string | undefined;
    AddImageForm: FormGroup;
    submitted : boolean = false;
    file: any = null;
    isupdate: boolean = false;
    returnType: any;

    constructor(public bsModalRef:BsModalRef, private formBuilder: FormBuilder,
      private router:Router, private dashboardService: DashboardService, 
      private toasterService: ToastrService){
        this.AddImageForm = this.formBuilder.group({
          date: ['', [Validators.required]],
          files: ['', [Validators.required]]
         },
       )
    }

    processFile(imageInput: any) {
      this.file = imageInput.files[0];
    }

    AddDashboardImage(){
      this.submitted = true;
      if(this.AddImageForm.invalid || !this.file) {
        return;
      }
    
      let formParams = new FormData();
      formParams.append('File', this.file);
      formParams.append('date', this.AddImageForm.value["date"]);
      
      this.dashboardService.add_dashbord_image(formParams).subscribe(resp => {
        console.log(resp);
        this.returnType = resp;
        if(this.returnType['returnStatus'] == 1){
          this.toasterService.success(this.returnType.returnMessage);
          this.bsModalRef.hide();
          this.router.navigateByUrl(environment.appUrl);
        }else{
          this.toasterService.warning(this.returnType.returnMessage);
        }
      })
    }

}
