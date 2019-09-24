import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] =[
    new Recipe('Pizza Recipe',
    "A great Pizza",
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png"),
    new Recipe('Another Pizza Recipe',
    "Another great Pizza",
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
