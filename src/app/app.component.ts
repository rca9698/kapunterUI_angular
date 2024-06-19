import { Component } from '@angular/core';
import { SitesService } from './Sites/sites.service';
import { ISiteDetailModal, SiteDetailModal } from './Shared/Modals/site-detail-modal'
import { DashboardService } from './Dashboard/dashboard.service';
import { AuthService } from './auth.service';
import { AccountsService } from './Accounts/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kapunter.client';
  site: ISiteDetailModal = new SiteDetailModal();
  
  constructor(private siteService: SitesService, private dashboardService:DashboardService
    , public authService: AuthService, public accountService: AccountsService) {

  }

  AddSitesPopup(){
    this.siteService.OpenAddSitePopup(false,this.site);
  }
  
  OpenAddImagePopup(){
    this.dashboardService.OpenAddImagePopup('Add Image');
  }

  hasRole(role: string) : boolean {
    return this.authService.user?.role.includes(role);
  }

  loginPopup() {
    this.accountService.OpenLoginPopup(true, 'Login');
  }
  
  logoutSeesion() {
    this.authService.logout(); 
  }
}
