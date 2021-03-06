import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';
import { FirebaseListObservable } from "angularfire2";

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  public items: FirebaseListObservable<Item[]>;

  constructor(private itemSvc: ItemService) { }

  ngOnInit() {
    this.items = this.itemSvc.getItemsList({limitToLast: 5})
  }


  addEmptyItem() {
    let item = new Item()
    this.itemSvc.createItem(item)
  }

  deleteItems() {
    this.itemSvc.deleteAll()
  }



}
