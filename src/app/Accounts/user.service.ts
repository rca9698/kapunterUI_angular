import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { users } from '../Shared/Modals/users';
import { apiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http:HttpClient, private apiservice: apiService) { }
  
  ngOnInit(): void { }
  userList: users | undefined;
   userlist(userQuery:any) {
    return this.apiservice.GetUsers(userQuery);
  }

  userlistDetailById(userById: any) {
    return this.apiservice.GetUserById(userById);
  }

}
