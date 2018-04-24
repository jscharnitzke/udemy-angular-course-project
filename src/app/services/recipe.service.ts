import { Recipe } from '../recipe-panel/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Mac & Cheese',
            'Old fashioned mac and cheese',
            'https://images-gmi-pmc.edge-generalmills.com/c41ffe09-8520-4d29-9b4d-c1d63da3fae6.jpg',
            [
                new Ingredient('Cheese', 1),
                new Ingredient('Bag of Elbow Noodles', 2)
            ]
        )
    ];

    getRecipes() { return [...this.recipes]; }
}
