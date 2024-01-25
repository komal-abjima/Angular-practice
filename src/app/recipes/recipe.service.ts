import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

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

      constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredient: Ingredient[]){
      this.shoppingListService.addIngredientsToList(ingredient);

    }

}