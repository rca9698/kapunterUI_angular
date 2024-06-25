import { Component } from '@angular/core';
import { SitesService } from '../Sites/sites.service';
import { ISiteDetailModal, SiteDetailModal } from '../Shared/Modals/site-detail-modal';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  site:ISiteDetailModal = new SiteDetailModal();
  constructor(private siteService: SitesService, private router: Router
    , public authservice: AuthService){
  }

  RedirectToHome(){
    this.router.navigate([environment.appUrl]);
  }

  AddSitesPopup(){
    this.siteService.OpenAddSitePopup(false,this.site);
  }
  
  createId(){
    this.siteService.OpenAddSitePopup(false,this.site);
  }

}
