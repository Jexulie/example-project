import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Item } from '../models/item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  public Item: Item;
  public paramID: string;
  public error: Error;

  constructor(public itemsService: ItemsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.getId();
    this.getItem();
  }

  getId(){
    this.paramID = this.route.snapshot.paramMap.get('id');
  }

  getItem(){
    if(this.paramID !== null){
      this.itemsService.getItem(this.paramID)
      .then((item: Item) => {
        this.Item = item;
      })
      .catch((err: Error) => {
        this.error = err;
      })
    }
  }

}
