import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {


  public itemsList: Item[] = [
    {
      id: "9001",
      title: "Farming Tractor",
      description: "Selling Used Farming Tractor ...",
      postedOn: new Date('2019-09-04'),
      owner: {
        id: "1001",
        displayName: "Joe Doe",
        email: "joe.doe@mail.com",
        createDate: new Date('2019-09-03'),
        accountType: "user"
      }
    },
    {
      id: "9005",
      title: "Another Farming Tractor",
      description: "Selling Used Farming Tractor Again ...",
      postedOn: new Date('2019-09-04'),
      owner: {
        id: "1001",
        displayName: "Joe Doe",
        email: "joe.doe@mail.com",
        createDate: new Date('2019-09-04'),
        accountType: "user"
      }
    },
    {
      id: "9005",
      title: "And Another Farming Tractor",
      description: "Selling Used Farming Tractor Again and Again ...",
      postedOn: new Date('2019-09-04'),
      owner: {
        id: "1001",
        displayName: "Joe Doe",
        email: "joe.doe@mail.com",
        createDate: new Date('2019-09-05'),
        accountType: "user"
      }
    },
    {
      id: "9002",
      title: "Hot Cakes",
      description: "LF Hot Cakes...",
      postedOn: new Date('2019-09-23'),
      owner: {
        id: "1002",
        displayName: "Marry Popins",
        email: "mary@mail.com",
        createDate: new Date('2019-09-13'),
        accountType: "user"
      }
    },
    {
      id: "9003",
      title: "Rental House",
      description: "House Leasing Businness...",
      postedOn: new Date('2019-09-23'),
      owner: {
        id: "2001",
        displayName: "X-Corp",
        email: "x@corp.com",
        createDate: new Date('2019-09-23'),
        accountType: "corporate"
      }
    },
    {
      id: "9004",
      title: "Cheap CPU chips",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam facilis non laudantium ratione optio quasi perspiciatis, sapiente minus earum nam.",
      postedOn: new Date('2019-09-28'),
      owner: {
        id: "2002",
        displayName: "Y-Corp",
        email: "y@corp.com",
        createDate: new Date('2019-09-27'),
        accountType: "corporate"
      }
    }
  ]

  constructor() { }

  getItemsList(filter) {
    return new Promise((resolve, reject) => {
      // API Call
      if (this.itemsList.length > 0) {
        if (filter === null) {
          resolve(this.itemsList);
        }
        let filteredList = this.itemsList.filter(item => {
          if (item.owner.accountType === filter) {
            return item;
          }
        })

        resolve(filteredList);
      } else {
        reject(new Error('Could not get items list'));
      }
    });
  }

  getItem(id: string) {
    return new Promise((resolve, reject) => {
      // API Call
      if (this.itemsList.length > 0) {
        let item: Item = this.itemsList.find(item => item.id === id);
        resolve(item);
      } else {
        reject(new Error('Could not get the item'));
      }
    });
  }
}
