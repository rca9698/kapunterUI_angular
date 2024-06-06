import { Component } from '@angular/core';
import { SitesService } from './Sites/sites.service';
import { SiteDetail } from './././Shared/Modals/SiteDetail'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kapunter.client';
  site: SiteDetail = {
    siteId: 0,
    siteName: '',
    siteURL: '',
    userId: 0n,
    accountId: 0n,
    userNumber: 0n,
    userName: '',
    documentDetailId: '',
    fileExtenstion: '',
    createdBy: '',
    createdDate: '',
    UpdatedBy: '',
    UpdatedDate: ''
  };
  
  constructor(private siteService: SitesService){

  }

  AddSitesPopup(){
    const emptyObject = { }
    this.siteService.OpenLoginPopup(false,this.site);
  } 
}
