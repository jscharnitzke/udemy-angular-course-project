import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RecipePanelComponent } from './recipe-panel/recipe-panel.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: 'recipes', component: RecipePanelComponent },
  { path: 'list', component: ShoppingListComponent }
];

@NgModule({})
export class AppRoutingModule {}
