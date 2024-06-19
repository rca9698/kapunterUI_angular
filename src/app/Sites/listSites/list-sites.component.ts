import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { SitesService } from '../sites.service';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { ISiteDetailModal } from 'src/app/Shared/Modals/site-detail-modal';
import { DeleteService } from 'src/app/Shared/Modules/delete-module/delete.service';

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

  constructor(private siteService:SitesService, 
    private toasterService: ToastrService, private deleteService:DeleteService){
    this.sitePath = environment.imagePath.sitePath;
    this.loadSites();
  }

  ngOnInit(): void {
  
  }

  loadSites(){
    this.listSitesQuery = {
      SessionUser: 1
    };
     this.siteService.getSiteList(this.listSitesQuery).subscribe(resp => {
      console.log(resp);
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
