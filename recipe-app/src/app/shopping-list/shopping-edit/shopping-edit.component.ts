import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addItem = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(itemName: HTMLInputElement, itemAmount: HTMLInputElement) {
    this.addItem.emit(new Ingredient(itemName.value, parseInt(itemAmount.value)));
  }

}
