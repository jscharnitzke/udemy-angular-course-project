import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const recipeId = this.route.snapshot.params['recipeId'];

    this.recipe = this.recipeService.getRecipes()[recipeId];
  }

  onSendToShoppingList() {
    this.recipeService.sendIngredientsToShoppingList(this.recipe);
  }
}
