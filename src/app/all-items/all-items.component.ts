import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})

export class AllItemsComponent implements OnInit {

  public Items: Item[] = [];
  public error: Error;
  public filterInput: string = "";

  constructor(public itemsService: ItemsService) { }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList(){
    this.itemsService.getItemsList(null)
    .then((items: Item[]) => {
      this.Items = items;
    })
    .catch((err: Error) => {
      this.error = err;
    })
  }

}
