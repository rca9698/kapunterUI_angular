import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { AddImageComponent } from './Add-Image/add-image.component';
import { environment } from 'src/environments/environment.development';
import { apiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  bsmodalRef?: BsModalRef;

  constructor(private bsModalService:BsModalService,private http: HttpClient, private apiservice: apiService) { }

  OpenAddImagePopup(title: string){
    const initalstate: ModalOptions = {
      initialState:{
        title
      }
    }
    this.bsmodalRef = this.bsModalService.show(AddImageComponent,initalstate);
  }

  add_dashbord_image(formParams: any){
    return this.apiservice.AddDashboardImage(formParams);
  }

}
