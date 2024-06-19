import { Component } from '@angular/core';
import { Ibank_details } from 'src/app/Shared/Modals/BankAccount/bank_details';
import { BankAccountService } from '../../bank-account.service';

@Component({
  selector: 'app-list-admin-bank-account',
  templateUrl: './list-admin-bank-account.component.html',
  styleUrls: ['./list-admin-bank-account.component.css']
})
export class ListAdminBankAccountComponent {
  Ibank_details: Ibank_details[] | undefined; 
  returnType:any;
  paginationCount: number = 1;
  totalCount: number = 0;

  constructor(private bankaccountservice:BankAccountService) {

  }

  AddAdminBankDetailPopup() {
    this.bankaccountservice.OpenAddAdminBankAccountPopup(false);
  }

  MakeAdminBankDefault() {

  }

  DeleteAdminBankAccount() {
    
  }

  list_Admin_Bank_Accounts(){
    this.bankaccountservice.list_Admin_Bank_Accounts().subscribe({
      next:(response) =>{
       this.returnType = response;
       this.Ibank_details = this.returnType['returnList'];
       this.paginationCount = this.returnType['paginationCount'];
       this.totalCount = this.returnType['totalCount'];
      },
      error:error => {
        console.log(error);
      }
    });
  }

}
