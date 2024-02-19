import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, order } from '../model/user-type';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  totalPrice: number | undefined;
  cartData: cart[] | undefined;
  orderMsg: string | undefined;
  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {
    

  }
  orderNow(data: { email: string, address: string, contact: string }) {

    console.log(data);
    alert('Your order is sucessfully placed!! THANK YOU')
    this.router.navigate(['/'])
  
  }


}
  