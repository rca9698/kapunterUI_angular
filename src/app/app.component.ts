import { Component } from '@angular/core';
import { SitesService } from './Sites/sites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kapunter.client';

  constructor(private siteService: SitesService){

  }

  AddSitesPopup(){
    this.siteService.OpenLoginPopup(false,0);
  }

  UpdateSitePopup(siteId: number){
    this.siteService.OpenLoginPopup(false,siteId);
  }
}
