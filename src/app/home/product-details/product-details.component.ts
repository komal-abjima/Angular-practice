import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Output() closeDetailView: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() currentProduct: Product | null = null;

  onClose(){
    this.closeDetailView.emit(false);
  }

}
