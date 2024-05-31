import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { users } from 'src/app/Shared/Modals/users';
import { ReturnType } from 'src/app/Shared/Modals/Common/ReturnType';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  constructor(private userService: UserService){ }

  ngOnInit() {
    this.userlist();
  }

  usersQuery: any;
  usersList: users[] | undefined; 
  returnType:any;

  userlist() {
  this.userService.userlist(this.usersQuery).subscribe({
      next:(response) =>{
       this.returnType = response;
       console.log(this.returnType);
       this.usersList = this.returnType['returnList'];
      },
      error:error => {
        console.log(error);
      }
    })
    
  }
}
