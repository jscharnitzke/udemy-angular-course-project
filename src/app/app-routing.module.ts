import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipePanelComponent } from './recipe-panel/recipe-panel.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-panel/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipePanelComponent,
    children: [{ path: 'recipes/:recipeId', component: RecipeDetailComponent }]
  },
  { path: 'list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
