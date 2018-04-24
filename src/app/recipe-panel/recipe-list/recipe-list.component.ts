import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Mac & Cheese',
      'Old fashioned mac and cheese',
      'https://images-gmi-pmc.edge-generalmills.com/c41ffe09-8520-4d29-9b4d-c1d63da3fae6.jpg')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
