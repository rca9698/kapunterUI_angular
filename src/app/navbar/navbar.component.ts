import { Component } from '@angular/core';
import { AccountsService } from '../Accounts/accounts.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private accountService: AccountsService, public authservice: AuthService){
    console.log('asad'+authservice.isLoggenIn);
  }

  loginPopup() {
      this.accountService.OpenLoginPopup(true, 'Login');
  }
}
