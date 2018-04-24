import { Recipe } from '../recipe-panel/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Mac & Cheese',
            'Old fashioned mac and cheese',
            'https://images-gmi-pmc.edge-generalmills.com/c41ffe09-8520-4d29-9b4d-c1d63da3fae6.jpg')
    ];

    getRecipes() { return [...this.recipes]; }
}
