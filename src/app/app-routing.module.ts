import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipePanelComponent } from './recipe-panel/recipe-panel.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-panel/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-panel/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-panel/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipePanelComponent,
    children: [
      { path: '', component: RecipeStartComponent, pathMatch: 'full' },
      { path: 'new', component: RecipeEditComponent },
      { path: ':recipeId', component: RecipeDetailComponent },
      { path: ':recipeId/edit', component: RecipeEditComponent }
    ]
  },
  { path: 'list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
