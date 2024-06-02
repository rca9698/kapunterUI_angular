import { Component } from '@angular/core';
import { SiteDetail } from 'src/app/Shared/Modals/SiteDetail';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-list-sites',
  templateUrl: './list-sites.component.html',
  styleUrls: ['./list-sites.component.css']
})
export class ListSitesComponent {

  sites: SiteDetail[] | undefined;
  sitePath: string | undefined;

  constructor(){
    this.sitePath = environment.imagePath.sitePath
  }

  deleteSite(site: SiteDetail){

  }

  updateSite(site: SiteDetail){

  }

}
