import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onSendToShoppingList() {
    for (const ingredient of this.recipe.ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }
  }

}
