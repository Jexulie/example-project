import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public Items: Item[] = [];
  public error: Error;
  public filterInput: string = "";

  constructor(public itemsService: ItemsService) { }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList(){
    this.itemsService.getItemsList('user')
    .then((items: Item[]) => {
      this.Items = items;
    })
    .catch((err: Error) => {
      this.error = err;
    })
  }

}
