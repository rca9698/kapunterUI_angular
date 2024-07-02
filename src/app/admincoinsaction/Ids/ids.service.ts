import { Injectable } from '@angular/core';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { apiService } from 'src/app/api.service';
import { AdminCreateIdComponent } from './admin-create-id/admin-create-id.component';
import { IID_Request_Modal } from 'src/app/Shared/Modals/Ids/id-request-modal';

@Injectable({
  providedIn: 'root'
})
export class IdsService {
  bsmodalRef: any;
  constructor(private bsModalService:BsModalService, private apiservice: apiService) { }

  listIdRequests(obj: any){
    return this.apiservice.listIdRequests(obj)
  }

  listIds(obj: any){
    return this.apiservice.GetIDs(obj)
  }

  AdminAddIDPopup(obj: IID_Request_Modal){
    const initalstate: ModalOptions = {
      initialState:{
        obj
      }
    }
    this.bsmodalRef?.hide();
    this.bsmodalRef = this.bsModalService.show(AdminCreateIdComponent, initalstate);
  }
  
  AdminAddID(obj: any){
    return this.apiservice.AddID(obj)
  }

}
