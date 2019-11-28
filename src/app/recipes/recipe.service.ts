import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] =[
    new Recipe(
      'Pizza Recipe',
    "A great Pizza",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    [
      new Ingredient('Meat', 1),
      new Ingredient('Bread', 1),
    ]),
    new Recipe('Another Pizza Recipe',
    "Another great Pizza",
    "https://images.unsplash.com/photo-1516697073-419b2bd079db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80",
    [
      new Ingredient('Meat', 1),
      new Ingredient('Bread', 1),
      new Ingredient('Cheese', 1),
    ])
  ];

  constructor (
    private slService: ShoppingListService
  ) {}

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
