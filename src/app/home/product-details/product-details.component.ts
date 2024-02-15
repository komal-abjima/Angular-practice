import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../model/product.model';
import { DataService } from '../../service/data.service';
import { cart } from '../../model/user-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  @Output() closeDetailView: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() currentProduct: Product | null = null;
  productQuantity:number=1;
  removeCart: boolean = false;

  constructor(private dataService: DataService){}
  ngOnInit(): void {
    let cartData = localStorage.getItem('localCart');
   
  if (this.currentProduct.id && cartData) {
      let items = JSON.parse(cartData);
   
      if (Array.isArray(items)) {
      items = items.filter((item: Product) => this.currentProduct.id === item.id);
   
        if (items.length > 0) {
          this.removeCart = true;
        } else {
          this.removeCart = false;
        }
      } 
    }
  }


  onClose(){
    this.closeDetailView.emit(false);
  }


  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }
  addToCart(){
    if(this.currentProduct){
      this.currentProduct.quantity = this.productQuantity;
      if(!localStorage.getItem('user')){
        // console.warn(this.currentProduct)
        this.dataService.localAddToCart(this.currentProduct)
        this.removeCart = true

      }
      else{
        console.warn('user is logged in')
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user).id;
        console.warn(userId)
        let cartData: cart = {
          ...this.currentProduct,
          userId,
          productId: this.currentProduct.id,
        }
        // delete cartData.id
        console.warn(cartData);
        this.dataService.addTocart(cartData).subscribe((res)=>{
          console.warn('result', res)

        })
        
      }
     
    }
  }

  removetoCart(id: number){
    this.dataService.removeItemFromCart(id);
    this.removeCart = false
  }

}
