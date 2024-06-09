import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { AddSiteComponent } from './addSite/add-site.component';
import { environment } from 'src/environments/environment.development';
import { ISiteDetail, SiteDetail } from '../Shared/Modals/SiteDetail';

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  bsmodalRef?: BsModalRef;
  constructor(private bsModalService:BsModalService,private http: HttpClient) { }

OpenAddSitePopup(isupdate: boolean, site: ISiteDetail){
  const initalstate: ModalOptions = {
    initialState:{
      isupdate,
      site 
    }
  }
  console.log('add site')
  this.bsmodalRef?.hide();
  this.bsmodalRef = this.bsModalService.show(AddSiteComponent,initalstate);
}

public getSiteList(listSitesQuery: any){
  return this.http.post(environment.apiUrl+'/api/Site/GetSites', listSitesQuery);
}

public uploadfile(formParams: any) {
  
  // const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
  return this.http.post(environment.apiUrl+'/api/Site/AddSiteDetail', formParams);
}

}
