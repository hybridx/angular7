import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('Pizza Recipe',
    "A great Pizza",
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Recipe_Unlimited_logo.png") 
  ];

  constructor() { }

  ngOnInit() {
  }

}
