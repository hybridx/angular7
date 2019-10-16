import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Pizza base",1),
    new Ingredient("Butter",5),
  ];

  constructor() { }

  ngOnInit() {
  }
  addIngrident(event) {
    this.ingredients.push(event);
    console.log(event);
  }

}
