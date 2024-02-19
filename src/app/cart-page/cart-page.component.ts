import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, priceSummary } from '../model/user-type';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartData: cart[] | undefined;
  priceSummary: priceSummary = {
    price: 1000,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }
  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {
    this.loadDetails();
  }

  loadDetails() {
    this.ds.currentCart().subscribe((result) => {
      this.cartData = result;
      console.warn(this.cartData);
      let price = 1000;
      result.forEach((item) => {
        if (item.products) {
          // price = price + (+item.price * +item.products)
          price = 25000
        }
      })
      this.priceSummary.price = price;
      this.priceSummary.discount = price / 10;
      this.priceSummary.tax = price / 10;
      this.priceSummary.delivery = 100;
      this.priceSummary.total = price + (price / 10) + 100 - (price / 10);

      if (!this.cartData.length) {
        this.router.navigate(['/'])
      }

    })
  }

  removeToCart(cartId: number | undefined) {
    cartId && this.cartData && this.ds.removeToCart(cartId)
      .subscribe((result) => {
        this.loadDetails();
      })
  }
  checkout() {
    this.router.navigate(['/checkout'])
  }
}

