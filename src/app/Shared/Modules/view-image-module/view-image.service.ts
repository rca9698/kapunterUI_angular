import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { apiService } from 'src/app/api.service';
import { ViewImageModuleComponent } from './view-image-module.component';

@Injectable({
  providedIn: 'root'
})
export class ViewImageService {
  bsmodalRef?: BsModalRef;
  constructor(private bsModalService:BsModalService, private apiservice: apiService) { }

OpenViewImagePopup(Path: string, title: string, obj: any){
  const initalstate: ModalOptions = {
    initialState:{
      Path,
      title,
      obj 
    }
  }
  this.bsmodalRef?.hide();
  this.bsmodalRef = this.bsModalService.show(ViewImageModuleComponent, initalstate);
}
}
