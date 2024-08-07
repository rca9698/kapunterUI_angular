import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { environment } from 'src/environments/environment.development';
import { DashboardImages, IDashboardImages } from '../Shared/Modals/dashboard-images-modal';
import { CoinsService } from '../admincoinsaction/coins/coins.service';
import { AuthService } from '../auth.service';
import { ToastrService } from '../toastr/toastr.service';
import { UserService } from '../admincoinsaction/User/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  returnType: any; 
  imgPath: string | undefined;
  images:IDashboardImages[] = [new DashboardImages()];
  showslider:boolean | undefined;

  constructor(private homeService:HomeService, private coinsservice: CoinsService
    , public authservice: AuthService, private toasterService: ToastrService
    , public userservice: UserService){
    this.imgPath = environment.imagePath.dashboardImages;
  }
  ngOnInit(): void {
     this.homeService.getDashboradImages().subscribe(resp=>{
      console.log(resp);
      this.returnType = resp; 
      this.images = this.returnType['returnList'];
      if(this.images.length > 0){
        this.showslider = true;
      }
     });
  }

  DepositeToWallet(){
    this.coinsservice.OpenDepositeCoinsRequestPopup('Deposite');
  }

  WithdrawFromWallet(){
    this.coinsservice.OpenWithdrawCoinsRequestPopup('Withdraw');
  }

  ActionToastr(){
    this.toasterService.warning('Action not allowed!!!');
  }

}
