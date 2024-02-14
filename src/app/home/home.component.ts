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
  showProductDetails: boolean = false;
  currentProduct: Product | null = null;
  categories: string[] =[];

  filteredProducts ='';
  

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.fetchAllProducts();
    this.loadAllCategories();
  }
  private fetchAllProducts(){
    this.dataService.GetAllProducts().subscribe((res)=>{
      this.allProducts = res
      console.log(this.allProducts)
    })
  }

  closeTaskDetails(){
    this.showProductDetails = false
  }

  showCurrentProductDetails(id: number | undefined){
      this.showProductDetails = true
      this.dataService.getProductDetails(id, this.allProducts).subscribe({
        next:(data: Product) =>{
          this.currentProduct = data
          console.log(data)
        }
      })

  }


  loadAllProducts(){
    this.fetchAllProducts();
  }

  loadAllCategories() {
    this.dataService.getAllCategories().subscribe((categories: any) => {
      this.categories = categories;
    });
  }
 
  loadProductsByCategory(category: string) {
    this.dataService.getProductsByCategory(category).subscribe((products) => {
      this.allProducts = products;
      console.log(products)
    });
  }
 
  getCategoryImage(category: string): string {
    const categoryImages = {
      'Mens Wear': '../../assets/elect.png',
    };
    return categoryImages[category] || 'default-image-url.jpg'; 
  }

  searchProducts(){
    this.filteredProducts;
  }

  

}
