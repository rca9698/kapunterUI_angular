import { Component } from '@angular/core';
import { IDRequestModal } from 'src/app/Shared/Modals/Ids/id-request-modal';
import { IdsService } from 'src/app/ids/ids.service';

@Component({
  selector: 'app-id-request-list',
  templateUrl: './id-request-list.component.html',
  styleUrls: ['./id-request-list.component.css']
})
export class IdRequestListComponent {

  constructor(private idsService: IdsService){ }

  ngOnInit() {
     
  }

  usersQuery: any ;
  idRequestList: IDRequestModal[] | undefined; 
  returnType:any;
  paginationCount: number = 1;
  totalCount: number = 0;

  CreateIDPopup(obj: IDRequestModal){

  }

  DeleteIDRequest(obj: IDRequestModal){

  }

  fetchIdRequestList(paginationQuery: any){
    this.idsService.listIdRequests(paginationQuery).subscribe({
      next:(response) =>{
       this.returnType = response;
       this.idRequestList = this.returnType['returnList'];
       this.paginationCount = this.returnType['paginationCount'];
       this.totalCount = this.returnType['totalCount'];
      },
      error:error => {
        console.log(error);
      }
    });
  }

  
  PaginationNumber(pageNumber:number) {
    this.usersQuery.pageNumber = pageNumber;
    this.fetchIdRequestList(this.usersQuery);
  }

  //function to return list of numbers from 0 to n-1 
  getCountArray(): number[] {
    return Array.from({ length: this.paginationCount }, (_, i) => i);
  }
}
