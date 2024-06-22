import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { apiService } from 'src/app/api.service';
import { MakeDefaultModuleComponent } from './make-default-module.component';

@Injectable({
  providedIn: 'root'
})
export class MakeDefaultService {
  bsmodalRef?: BsModalRef;
  constructor(private bsModalService:BsModalService, private apiservice: apiService) { }

OpenMakeDefaultPopup(deleteType: string, title: string, obj: any){
  const initalstate: ModalOptions = {
    initialState:{
      deleteType,
      title,
      obj 
    }
  }
  console.log(deleteType);
  this.bsmodalRef?.hide();
  this.bsmodalRef = this.bsModalService.show(MakeDefaultModuleComponent,initalstate);
}
}
