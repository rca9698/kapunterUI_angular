import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from './Shared/Modals/login';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class apiService {

  constructor(private http: HttpClient) { }

  sendOtp(obj: string){
     return this.http.get(`${environment.apiUrl}/api/LoginSignup/Generate_Otp/${obj}`);
    }
  
  login(obj: login){
    console.log('login success');
     return this.http.post(`${environment.apiUrl}/api/LoginSignup/Login_GetToken`, obj);
  }
   
}
