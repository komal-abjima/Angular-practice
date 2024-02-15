import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../model/product.model";
import { BehaviorSubject, Observable, catchError, map, of, throwError } from "rxjs";
import { Card } from "primeng/card";
import { cart } from "../model/user-type";

@Injectable({
  providedIn: 'root'
})
export class DataService {
private currentProductId = 1;
  cartData = new EventEmitter<Product[] | []>();
  public search = new BehaviorSubject<string>("");
  
  constructor(private http: HttpClient) { }

  GetAllProducts() {
    return this.http.get('https://fakestoreapi.com/products')
      .pipe(
        map((response) => {
          let products: Product[] = [];
          let productId = 1;

          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              products.push({ ...response[key], id: productId });
              productId++;
            }
          }

          return products;
        }),
        catchError((err) => {
          const errorObj = {
            statusCode: err.status,
            errorMessage: err.message,
            datetime: new Date()
          };
          return throwError(() => err);
        })
      );
  }

  getProductDetails(id: number | undefined, products: Product[]) {
    const product = products.find(p => p.id === id);
    if(product){
      return of(product);
    }else{
    return this.http.get('https://fakestoreapi.com/products/' + id)
      .pipe(map((response) => {
        console.log(response)
        let product = {};
        product = { ...response, id: id }
        return product;
      }))
    }

  }


  getProductsByCategory(category: string){
    return this.http.get('https://fakestoreapi.com/products/category/'+category)
      .pipe(
        map((response) => {
          let products: Product[] = [];
          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              products.push({ ...response[key], id: key });
            }
          }
          return products;
        
        }),
    
        catchError((err) => throwError(() => err))
      );
  }

  getAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories')
      .pipe(
        catchError((err) => throwError(() => err))
      );
  }

  // cart functionality
  localAddToCart(data: Product){
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('localCart', JSON.stringify([data]))
    }
    else{
      
      cartData = JSON.parse(localCart);
      if (Array.isArray(cartData)) 
      cartData.push(data)
      localStorage.setItem('localCart', JSON.stringify(cartData))
    }
    this.cartData.emit(cartData)
  }
  
  removeItemFromCart(id: number){
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      let items: Product[] = JSON.parse(cartData)
      items = items.filter((item:Product)=>id !== item.id)
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items)
    }


  }

  addTocart(cartData: cart){
    return this.http.post('https://fakestoreapi.com/carts', cartData)
  }

  getCartByUserId(id: number){
    this.http.get<any>('https://fakestoreapi.com/carts').subscribe((res)=>{
      if(res && res.body){
        this.cartData.emit(res.body)
      }
    })
  }


}



