import { Component } from '@angular/core';
import { Ibank_details } from 'src/app/Shared/Modals/BankAccount/bank_details';
import { BankAccountService } from '../../bank-account.service';

@Component({
  selector: 'app-list-user-bank-account',
  templateUrl: './list-user-bank-account.component.html',
  styleUrls: ['./list-user-bank-account.component.css']
})
export class ListUserBankAccountComponent {
  Ibank_details: Ibank_details[] | undefined; 
  returnType:any;

  constructor(private bankaccount: BankAccountService) {

  }

  list_User_Bank_Accounts(obj: any){
    this.bankaccount.list_User_Bank_Accounts(obj).subscribe({
      next:(response) =>{
       this.returnType = response;
       this.Ibank_details = this.returnType['returnList'];
      },
      error:error => {
        console.log(error);
      }
    });
  }

  AddBankDetailPopup() {
    
  }

  MakeBankDetailDefault() {

  }

  DeleteBankAccountPopup() {
    
  }
}
