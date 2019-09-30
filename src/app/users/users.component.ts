import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  public Users: User[] = [];
  public error: Error;

  constructor(public usersService: UsersService) {
    
   }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsersList()
    .then((users: User[]) => {
      this.Users = users;
    })
    .catch((err: Error) => {
      this.error = err;
    })
  }
}
