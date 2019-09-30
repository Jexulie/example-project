import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users: User[] = [
    {
      id: "1001",
      displayName: "Joe Doe",
      email: "joe.doe@mail.com",
      createDate: new Date('2019-09-03'),
      accountType: "user"
    },
    {
      id: "1002",
      displayName: "Marry Popins",
      email: "mary@mail.com",
      createDate: new Date('2019-09-13'),
      accountType: "user"
    },
    {
      id: "2001",
      displayName: "X-Corp",
      email: "x@corp.com",
      createDate: new Date('2019-09-23'),
      accountType: "corporate"
    },
    {
      id: "2002",
      displayName: "Y-Corp",
      email: "y@corp.com",
      createDate: new Date('2019-09-27'),
      accountType: "corporate"
    },
  ]

  constructor() { }

  getUsersList() {
    return new Promise((resolve, reject) => {
      // API Call
      if(this.users.length > 0){
        resolve(this.users);
      }else{
        reject(new Error('Could not get users'));
      }
    });
  }
}
