import { Injectable } from '@angular/core';
import { login } from './Shared/Modals/login';
import { apiService } from './api.service';
import { BehaviorSubject, tap } from 'rxjs';
import { Iusermodal, usermodal } from './Shared/Modals/usermodal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  returnType: any;
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggenIn = this._isLoggedIn.asObservable();
  private readonly TOKEN_NAME = 'bearer_token';
  user: Iusermodal = new usermodal();

  get token() {
    return localStorage.getItem(this.TOKEN_NAME);
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

  private getUser(token: string): Iusermodal{
    if(!token){
      return new usermodal()
    }
    else{
      const userDetailobj: Iusermodal = JSON.parse(atob(token?.split('.')[1]));
      return new usermodal(userDetailobj['userId'], userDetailobj['otp'], userDetailobj['role']) ;
    }
  }

}
