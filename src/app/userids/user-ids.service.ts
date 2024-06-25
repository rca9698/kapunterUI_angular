import { Injectable } from '@angular/core';
import { apiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class UserIdsService {

  constructor(private apiservicce: apiService) { }
  
  AddIDRequest(obj: any){
    return this.apiservicce.AddIDRequest(obj);
  }
  

}
