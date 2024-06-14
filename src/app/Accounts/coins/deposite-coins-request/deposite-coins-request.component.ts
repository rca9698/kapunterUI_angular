import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CoinsService } from '../coins.service';
import { ToastrService } from 'src/app/toastr/toastr.service';

@Component({
  selector: 'app-deposite-coins-request',
  templateUrl: './deposite-coins-request.component.html',
  styleUrls: ['./deposite-coins-request.component.css']
})
export class DepositeCoinsRequestComponent {

  depositeCoinRequestFrom: FormGroup;
   submitted : boolean = false;
   file: any = null;
   returnType: any;
   
   QRCodeDetail:boolean = false;
   BankTrDetail:boolean = false;
   PhonePeDetail:boolean = false;

   backButtonVisibility: boolean = true;
   depositecoinsproofupload: boolean = false;
   depositecoinsdetails: boolean = true;
   paymentModeListView: boolean = true;
   paymentModeTypesDetailListView: boolean = true;

  constructor(public bsModalRef:BsModalRef, private formBuilder:FormBuilder, 
    private router:Router, private coinsservice: CoinsService, 
    private toasterService: ToastrService) {
      this.depositeCoinRequestFrom = this.formBuilder.group({
        coins: ['', [Validators.required]]
       },
     )
  }

  processFile(imageInput: any) {
    this.file = imageInput.files[0];
  }

  backToAddCoins(){
    this.depositecoinsdetails = true;
    this.depositecoinsproofupload = false;
  }

  DepositCoinsRequestAmount(){
    this.submitted = true;
  
    if(this.depositeCoinRequestFrom.invalid) {
      return;
    }
    
    this.depositecoinsdetails = false;
    this.depositecoinsproofupload = true;
  }

  DepositCoinsRequest(){
    if(this.depositeCoinRequestFrom.invalid || !this.file) {
      return;
    }

    let formParams = new FormData();
    formParams.append('File', this.file);
    formParams.append('coins', this.depositeCoinRequestFrom.value["coins"]);
    formParams.append('userid', '1');
    formParams.append('sessionuser', '1');

    this.coinsservice.deposite_coin_request_insert(formParams);
  }


  PaymentDataView(type: any){
    this.QRCodeDetail = false;
    this.BankTrDetail = false;
    this.PhonePeDetail = false;

    if(type == 'QRCodeDetail'){
      this.QRCodeDetail = true;
    }
    else if(type == 'BankTrDetail'){
      this.BankTrDetail = true;
    }
    else if(type == 'PhonePeDetail'){
      this.PhonePeDetail = true;
    }
  }
  
}
