import { Component, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html'
})

export class ShoppingListEditComponent {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();

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

        this.ingredientAdded.emit(newIngredient);
    }
}
