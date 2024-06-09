import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { AddImageComponent } from './Add-Image/add-image.component';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  bsmodalRef?: BsModalRef;

  constructor(private bsModalService:BsModalService,private http: HttpClient) { }

  OpenAddImagePopup(title: string){
    const initalstate: ModalOptions = {
      initialState:{
        title
      }
    }

    this.bsmodalRef = this.bsModalService.show(AddImageComponent,initalstate);
  }

  AddDashboardImage(formParams: any){
    console.log(formParams);
    return this.http.post(environment.apiUrl+'/api/Home/AddDashboardImages',formParams);
  }

}
