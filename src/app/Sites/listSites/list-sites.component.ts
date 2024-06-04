import { Component, OnInit } from '@angular/core';
import { SiteDetail } from 'src/app/Shared/Modals/SiteDetail';
import { environment } from 'src/environments/environment.development';
import { SitesService } from '../sites.service';
import { ToastrService } from 'src/app/toastr/toastr.service';

@Component({
  selector: 'app-list-sites',
  templateUrl: './list-sites.component.html',
  styleUrls: ['./list-sites.component.css']
})
export class ListSitesComponent implements OnInit {

  sites: SiteDetail[] | undefined;
  sitePath: string | undefined;
  listSitesQuery: any;
  returnType: any; 

  constructor(private siteServiece:SitesService, 
    private toasterService: ToastrService){
    this.sitePath = environment.imagePath.sitePath
  }

  ngOnInit(): void {
    this.listSitesQuery = {
      SessionUser: 1
    };
     this.siteServiece.getSiteList(this.listSitesQuery).subscribe(resp => {
      console.log(resp);
      this.returnType = resp;
      if(this.returnType['returnStatus'] == 1){
        this.sites = this.returnType['returnList'];
      }else{
        this.toasterService.warning(this.returnType.returnMessage);
      }
    })
  }

  deleteSite(site: SiteDetail){

  }

  updateSite(site: SiteDetail){

  }

}
