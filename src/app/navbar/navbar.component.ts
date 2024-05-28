import { Component } from '@angular/core';
import { AccountsService } from '../Accounts/accounts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private accountService: AccountsService){

  }

  loginPopup() {
      this.accountService.OpenLoginPopup(true, 'Login');
  }
}
