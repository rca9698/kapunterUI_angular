import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { SitesService } from '../sites.service';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { ISiteDetailModal } from 'src/app/Shared/Modals/site-detail-modal';
import { DeleteService } from 'src/app/Shared/Modules/delete-module/delete.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-sites',
  templateUrl: './list-sites.component.html',
  styleUrls: ['./list-sites.component.css']
})
export class ListSitesComponent implements OnInit {

  sites: ISiteDetailModal[] | undefined;
  sitePath: string | undefined;
  listSitesQuery: any;
  returnType: any;
  private readonly _sessionUser: any; 

  constructor(private siteService:SitesService, 
    private toasterService: ToastrService, private deleteService:DeleteService
    , private authservice: AuthService, private router:Router){
    this.sitePath = environment.imagePath.sitePath;
    this._sessionUser = this.authservice.user.userId;
  }

  ngOnInit(): void {
    this.loadSites();
  }

  loadSites(){

    console.log('list sites');

    this.listSitesQuery = {
      SessionUser: this._sessionUser
    };
     this.siteService.getSiteList(this.listSitesQuery).subscribe(resp => {
      this.returnType = resp;
      if(this.returnType['returnStatus'] == 1){
        this.sites = this.returnType['returnList'];
      }else{
        this.toasterService.warning(this.returnType.returnMessage);
      }
    })
  }

  deleteSitePopup(site: ISiteDetailModal){
    this.deleteService.OpenDeletePopup('site','Site',site);
  }

  updateSite(site: ISiteDetailModal){
    this.siteService.OpenAddSitePopup(true,site)
  }
}
