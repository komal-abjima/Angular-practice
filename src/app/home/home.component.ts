import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  allProducts: Product[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.fetchAllProducts();
  }
  private fetchAllProducts(){
    this.dataService.GetAllProducts().subscribe((res)=>{
      this.allProducts = res
      console.log(this.allProducts)
    })
  }

}
