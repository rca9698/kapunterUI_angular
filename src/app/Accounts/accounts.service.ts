import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { login } from '../Shared/Modals/login';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { users } from '../Shared/Modals/users';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  bsmodalRef?: BsModalRef;
  constructor(private bsModalService:BsModalService,private http: HttpClient) { }

OpenLoginPopup(issuccess: boolean, title: string){
  const initalstate: ModalOptions = {
    initialState:{
      issuccess,
      title
    }
  }
  this.bsmodalRef = this.bsModalService.show(LoginComponent,initalstate);
}

login(model: login){
  // return this.http.post(`${environment.appUrl}/api/account/login`, model);
}
 
}
