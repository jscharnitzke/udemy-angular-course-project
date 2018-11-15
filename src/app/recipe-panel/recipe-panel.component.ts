import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-panel',
  templateUrl: './recipe-panel.component.html',
  styleUrls: ['./recipe-panel.component.scss'],
  providers: [RecipeService]
})
export class RecipePanelComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
