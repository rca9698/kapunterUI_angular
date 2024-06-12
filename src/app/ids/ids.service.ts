import { Injectable } from '@angular/core';

import { apiService } from '../api.service'

@Injectable({
  providedIn: 'root'
})
export class IdsService {

  constructor(private apiservice: apiService) { }

  listIdRequests(obj: any){
    return this.apiservice.listIdRequests(obj)
  }

  listIds(obj: any){
    return this.apiservice.GetIDs(obj)
  }
}
