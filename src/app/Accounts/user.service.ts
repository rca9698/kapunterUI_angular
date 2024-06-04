import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { users } from '../Shared/Modals/users';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http:HttpClient) { }
  
  ngOnInit(): void { }
  userList: users | undefined;
   userlist(userQuery:any) {
    return this.http.post(`${environment.apiUrl}/api/User/GetUsers`, userQuery);
  }

  userlistDetailById() { 
    
    console.log(`${environment.apiUrl}/api/User/GetUsers`);
    return this.http.get(`${environment.apiUrl}/api/User/GetUsers`);
  }

}
