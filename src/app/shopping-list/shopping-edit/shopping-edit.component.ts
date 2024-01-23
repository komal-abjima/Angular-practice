import { Component, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRf: ElementRef;
  // @Output() ingredientsadded = new EventEmitter<Ingredient>

  constructor(private shoppingListService: ShoppingListService){}

  addBtn(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmt = this.amountInputRf.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmt);
    // this.ingredientsadded.emit(newIngredient);
    this.shoppingListService.addIngredients(newIngredient);

  }

}
