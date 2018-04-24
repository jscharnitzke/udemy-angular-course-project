import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-panel',
  templateUrl: './recipe-panel.component.html',
  styleUrls: ['./recipe-panel.component.scss']
})
export class RecipePanelComponent implements OnInit {
  selectedRecipe: Recipe = {
    name: '',
    description: '',
    imagePath: ''
  };

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(selectedRecipe: Recipe) {
    this.selectedRecipe = selectedRecipe;
  }

}
