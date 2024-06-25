import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'src/app/toastr/toastr.service';
import { UserIdsService } from '../user-ids.service';
import { IupdateCoinsToIds, updateCoinsToIds } from 'src/app/Shared/Modals/Coins/update_coins_to_ids';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-deposite-coins-to-ids',
  templateUrl: './deposite-coins-to-ids.component.html',
  styleUrls: ['./deposite-coins-to-ids.component.css']
})
export class DepositeCoinsToIdsComponent {

  DepositCoinsToIdsForm: FormGroup;
  submitted : boolean = false;
  addIDRequest : IupdateCoinsToIds = new updateCoinsToIds();

  constructor(public bsModalRef:BsModalRef, private formBuilder:FormBuilder, 
    private router:Router, private useridsservice: UserIdsService, 
    private toasterService: ToastrService, public authservice: AuthService){
      this.DepositCoinsToIdsForm = this.formBuilder.group({
        coins: ['', [Validators.required]]
       },
     )
  }

  SendDepositCoinsToIds(){

  }

}
