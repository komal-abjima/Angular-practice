import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{

// ingredientsChanged = new EventEmitter<Ingredient[]>();
ingredientsChanged = new Subject<Ingredient[]>();

   private ingredients: Ingredient[] = [
        new Ingredient('Apples',4),
        new Ingredient('Banana', 5)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());

      }

      addIngredientsToList(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //   this.addIngredients(ingredient);
        // }
        this.ingredients.push(...ingredients);
        // this.ingredientsChanged.emit(this.ingredients.slice())
        this.ingredientsChanged.next(this.ingredients.slice());

      }

}