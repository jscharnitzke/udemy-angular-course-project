import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipePanelComponent } from './recipe-panel/recipe-panel.component';
import { RecipeListComponent } from './recipe-panel/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-panel/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-panel/recipe-list/recipe-item/recipe-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    HeaderComponent,
    RecipePanelComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
