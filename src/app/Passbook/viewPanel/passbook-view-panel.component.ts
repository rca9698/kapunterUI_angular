import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ipassbook_detail_model } from 'src/app/Shared/Modals/passbook_detail_model';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { environment } from 'src/environments/environment.development';
import { PassbookService } from '../passbook.service';

@Component({
  selector: 'app-passbook-view-panel',
  templateUrl: './passbook-view-panel.component.html',
  styleUrls: ['./passbook-view-panel.component.css']
})
export class PassbookViewPanelComponent {
  
  passbooks: Ipassbook_detail_model[] | undefined;
  passbook: Ipassbook_detail_model | undefined
  proofPath: string | undefined;
  sitePath: string | undefined;
  listSitesQuery: any;
  returnType: any;
  isListPassbookHistory: boolean = true;
  isPassbookHistory: boolean = false;

  private readonly _sessionUser: any; 

  constructor(private toasterService: ToastrService, private authservice: AuthService
    , private router:Router, private passbookservice:PassbookService){
    this.proofPath = environment.imagePath.proofPath;
    this.sitePath = environment.imagePath.sitePath;
    this._sessionUser = this.authservice.user.userId;
  }

  ngOnInit(): void {
    this.passbookHistorylist(1);
  }

  viewpassbookHistorylist(){
    this.isPassbookHistory = false;
    this.isListPassbookHistory = true;
  }

  passbookHistorylist(siteId: number){
    let obj = {
      userId: this._sessionUser,
      siteId: siteId,
      sessionUser: this._sessionUser
    }
     this.passbookservice.passbookHistorylist(obj).subscribe(resp => {
      this.returnType = resp;
      this.isPassbookHistory = false;
      this.isListPassbookHistory = true;
      if(this.returnType['returnStatus'] == 1){
        this.passbooks = this.returnType['returnList'];
      }else{
        this.toasterService.warning(this.returnType.returnMessage);
      }
    })
  }

  PassbookHistoryById(passbookid: string){
    this.isPassbookHistory = true;
    this.isListPassbookHistory = false;
    this.passbookservice.passbookHistorybyid(passbookid).subscribe(resp => {
      this.returnType = resp;
      if(this.returnType['returnStatus'] == 1){
        this.passbook = this.returnType['returnVal'];
      }else{
        this.toasterService.warning(this.returnType.returnMessage);
      }
    })
  }
}
