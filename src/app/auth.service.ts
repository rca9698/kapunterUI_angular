import { Injectable } from '@angular/core';
import { login } from './Shared/Modals/login';
import { apiService } from './api.service';
import { BehaviorSubject, tap } from 'rxjs';
import { ITokenusermodal, Iusermodal, usermodal } from './Shared/Modals/user-modal';
import { Iusers, users } from './Shared/Modals/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  returnType: any;
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggenIn = this._isLoggedIn.asObservable();
  private readonly TOKEN_NAME = 'bearer_token';
  user: Iusermodal = new usermodal();
  userDetailQuery: {} | undefined;
  userdetail: Iusers = new users();

  get token() {
    let token = localStorage.getItem(this.TOKEN_NAME);
    return token == 'undefined' ? null : token;
  }

  constructor(private apiservice: apiService) { 
    this._isLoggedIn.next(!!this.token);
    this.user = this.getUser(this.token as string);
  }

  login(obj: login){
    return this.apiservice.login(obj).pipe(tap((response: any)=>{
      this.returnType = response;
      const token = this.returnType.token;
      this._isLoggedIn.next(true);
      localStorage.setItem(this.TOKEN_NAME, token);
      this.user = this.getUser(token);
    }));
  }

  logout(){
    localStorage.setItem(this.TOKEN_NAME, '');
    location.reload();
  }

  private getUser(token: string = ''): Iusermodal{
    if(!token){
      return new usermodal()
    }
    else{
      const userDetailobj: ITokenusermodal = JSON.parse(atob(token?.split('.')[1]));
      console.log(userDetailobj);
      return new usermodal(userDetailobj['userid'], userDetailobj['otp'], userDetailobj['role']) ;
    }
  }

  public hasRole(role: string) : boolean {
    return this.user?.role.includes(role);
  }

  public isadminview(){
    return this.hasRole('admin');
  }

  public isbenview(){
    return !this.hasRole('admin') && (this.hasRole('ben') || this.isLoggenIn);
  }

  getUserDetails(){

    this.userDetailQuery = {
      SessionUser: this.user.userId,
      UserId: this.user.userId
    };
    
    return this.apiservice.GetUserById(this.userDetailQuery).subscribe(resp => {
      this.returnType = resp;
      this.userdetail = this.returnType['returnVal'];
    });
  }

}
