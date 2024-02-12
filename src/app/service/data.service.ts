import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../model/product.model";
import { Observable, catchError, map, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private currentProductId = 1;
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

  getProductDetails(id: string | undefined) {
    return this.http.get('https://fakestoreapi.com/products/' + id)
      .pipe(map((response) => {
        console.log(response)
        let product = {};
        product = { ...response, id: id }
        return product;
      }))

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
}


// private currentProductId = 1;
 
// GetAllProducts() {
// return this.http.get('https://fakestoreapi.com/products')
//     .pipe(
//       map((response) => {
//         let products: Product[] = [];
//         for (let key in response) {
//           if (response.hasOwnProperty(key)) {
//             products.push({ ...response[key], id: this.currentProductId });
//             this.currentProductId++;
//           }
//         }
//         return products;
//       }),
//       catchError((err) => throwError(() => err))
//     );
// }
 
// getProductsByCategory(category: string) {
// return this.http.get('https://fakestoreapi.com/products/category/' + category)
//     .pipe(
//       map((response) => {
//         let products: Product[] = [];
//         for (let key in response) {
//           if (response.hasOwnProperty(key)) {
//             products.push({ ...response[key], id: this.currentProductId });
//             this.currentProductId++;
//           }
//         }
//         return products;
//       }),
//       catchError((err) => throwError(() => err))
//     );
// }