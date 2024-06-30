import { Component } from '@angular/core';
import { ISiteDetailModal } from 'src/app/Shared/Modals/site-detail-modal';
import { SitesService } from '../../Sites/sites.service';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { DeleteService } from 'src/app/Shared/Modules/delete-module/delete.service';
import { environment } from 'src/environments/environment.development';
import { AuthService } from 'src/app/auth.service';
import { UserIdsService } from 'src/app/userids/user-ids.service';

@Component({
  selector: 'app-user-list-sites',
  templateUrl: './user-list-sites.component.html',
  styleUrls: ['./user-list-sites.component.css']
})
export class UserListSitesComponent {

  sites: ISiteDetailModal[] | undefined;
  sitePath: string | undefined;
  listSitesQuery: any;
  returnType: any; 
  private readonly _sessionUser: any;
  
  constructor(private siteService:SitesService, 
    private toasterService: ToastrService, private userIdService: UserIdsService
    , private authservice: AuthService){
    this.sitePath = environment.imagePath.sitePath;
    this._sessionUser = this.authservice.user.userId;
  }

  ngOnInit(): void {
    this.loadSites();
  }

  loadSites(){
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

  CreateIDRequest(obj: any){
    this.userIdService.OpenAddIDRequestPopup(obj);
  }

}
