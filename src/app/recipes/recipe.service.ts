import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // recipeSelected = new EventEmitter<Recipe>();
    // recipeSelected = new Subject<Recipe>();


    private recipes: Recipe[] = [
      new Recipe('A Test Recipe', 
      'What else you need to say?', 
      'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_640.jpg'
      ,[
        new Ingredient('Burger', 1),
        new Ingredient('Pasta', 3)
      ]),
      new Recipe('A two Test', 
      'What else you need to say?', 
      'https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_1280.jpg',
      [
        new Ingredient('Pizza', 10),
        new Ingredient('French Fries', 5)
      ]
      )
    
    ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
