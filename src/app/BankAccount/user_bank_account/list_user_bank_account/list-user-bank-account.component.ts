import { Component, OnInit } from '@angular/core';
import { Ibank_details } from 'src/app/Shared/Modals/BankAccount/bank_details';
import { BankAccountService } from '../../bank-account.service';
import { GetUserBankAccount, IGetUserBankAccount } from 'src/app/Shared/Modals/BankAccount/get_user_bank_account'
import { AuthService } from 'src/app/auth.service';
import { DeleteService } from 'src/app/Shared/Modules/delete-module/delete.service';
import { MakeDefaultService } from 'src/app/Shared/Modules/make-default-module/make-default.service';
import { Iadd_bank_account, add_bank_account } from 'src/app/Shared/Modals/BankAccount/add_bank_account';

@Component({
  selector: 'app-list-user-bank-account',
  templateUrl: './list-user-bank-account.component.html',
  styleUrls: ['./list-user-bank-account.component.css']
})
export class ListUserBankAccountComponent implements OnInit {
  Ibank_details: Ibank_details[] | undefined; 
  returnType: any;
  getbankaccount: IGetUserBankAccount = new GetUserBankAccount();
  add_bank_account: Iadd_bank_account = new add_bank_account();

  constructor(private bankaccount: BankAccountService, private authService: AuthService
    , private deleteService: DeleteService, private makedefaultservice: MakeDefaultService 
  ) {

  }

  ngOnInit(): void {
    this.getbankaccount.userId = this.authService.user.userId;
    this.getbankaccount.sessionUser = this.authService.user.userId;
    this.list_User_Bank_Accounts(this.getbankaccount);
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
    this.bankaccount.OpenUserBankAccountPopup(false, this.add_bank_account);
  }

  MakeBankDetailDefault(obj: any) {
    this.makedefaultservice.OpenMakeDefaultPopup('userbank','Bank',obj);
  }

  DeleteBankAccountPopup(obj: any) {
    this.deleteService.OpenDeletePopup('userbank','Bank',obj);
  }
}
