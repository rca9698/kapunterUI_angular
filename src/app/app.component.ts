import { Component } from '@angular/core';
import { SitesService } from './Sites/sites.service';
import { ISiteDetail, SiteDetail } from './././Shared/Modals/SiteDetail'
import { DashboardService } from './Dashboard/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kapunter.client';
  site: ISiteDetail = new SiteDetail();
  
  constructor(private siteService: SitesService, private dashboardService:DashboardService){

  }

  AddSitesPopup(){
    this.siteService.OpenAddSitePopup(false,this.site);
  }
  
  OpenAddImagePopup(){
    this.dashboardService.OpenAddImagePopup('Add Image');
  }
  
}
