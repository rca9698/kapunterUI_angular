import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { AddSiteComponent } from './addSite/add-site.component';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  bsmodalRef?: BsModalRef;
  constructor(private bsModalService:BsModalService,private http: HttpClient) { }

OpenLoginPopup(isupdate: boolean, siteId: number){
  const initalstate: ModalOptions = {
    initialState:{
      isupdate,
      siteId
    }
  }
  this.bsmodalRef = this.bsModalService.show(AddSiteComponent,initalstate);
}

public getSiteList(listSitesQuery: any){
  return this.http.post(environment.apiUrl+'/api/Site/GetSites', listSitesQuery);
}

public uploadfile(file: File) {
  let formParams = new FormData();
  formParams.append('File', file);
  formParams.append('SiteName', 'SiteName');
  formParams.append('SiteURL', 'SiteURL');
  // const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
  return this.http.post(environment.apiUrl+'/api/Site/AddSiteDetail', formParams);
}

}
