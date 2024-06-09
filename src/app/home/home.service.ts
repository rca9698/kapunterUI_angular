import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getDashboradImages(){
    return this.http.get(`${environment.apiUrl}/api/Home/GetDashboardImages`);
  }

}
