import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../model/product.model";
import { catchError, map, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService{

    constructor(private http: HttpClient){}

    GetAllProducts(){
          return this.http.get<{[key: string]: Product}>('https://fakestoreapi.com/products')
              .pipe(map((response) =>{
               let products = [];
  
        for(let key in response){
          if(response.hasOwnProperty(key)){
            products.push({...response[key], id: key})
          }
  
        }
        return products;
      }))
     
      }
  

}