import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html'
})

export class ShoppingListEditComponent {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;

    constructor(private shoppingListService: ShoppingListService) { }

    onAddClicked() {
        const ingredientName = this.nameInput.nativeElement.value;
        const ingredientAmount = this.amountInput.nativeElement.value;

        if (ingredientName.length === 0 || ingredientAmount.length === 0) {
            return;
        }

        const newIngredient = new Ingredient(
            ingredientName,
            ingredientAmount
        );

        this.shoppingListService.addIngredient(newIngredient);
    }
}
