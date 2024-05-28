import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http:HttpClient) { }
  
  ngOnInit(): void { }
  
   userlist(userQuery:any) {
    console.log(`${environment.apiUrl}/api/User/GetUsers`);
    return this.http.post(`${environment.apiUrl}/api/User/GetUsers`, userQuery).subscribe();
  }

}
