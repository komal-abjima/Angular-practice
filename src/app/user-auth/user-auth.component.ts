import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { cart, cartProduct, login, signUp } from '../model/user-type';
import { Router } from '@angular/router';
import { Product } from '../model/product.model';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent implements OnInit {
  showLogin:boolean = true;
  authError: string = '';

  signupForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]], 
    password:['', Validators.required],
    username: ['', Validators.required],
    name: this.fb.group({ 
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    }),
    address: this.fb.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      zipcode: ['',Validators.required],
      geolocation: this.fb.group({
        lat:[''],
        long:['']
      }),
    }),
    phone: ['',Validators.required]

  });

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required], 
    password:['', Validators.required]


  });

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private ds: DataService) { };

  ngOnInit(): void {
    this.userService.userAuthReload();
   
  }

  signUp(data: signUp) {
    this.userService.userSignUp(data);
    
  }

    openLogin(){
    this.showLogin = true
  }

  openRegister(){
    this.showLogin = false

  }


  login(data: login){
    // console.warn(data);
    // this.userService.userLogin(data);
    // this.userService.invaliduserAuth.subscribe((res)=>{
    //   console.warn('result', res)
    //   if(res){
    //     this.authError  = 'Please Enter valid email and password'
    //   }
    //   else{
    //     this.localToUserApi();
    //   }
    // })
    // this.userService.userLogin(data);
    this.userService.userLogin(data)
    this.userService.invaliduserAuth.subscribe((result)=>{
      console.warn(result);
      if(result){
         this.authError="User not found"
      }else{
       this.localCartToRemoteCart();
      }
      
    })
  }



  localCartToRemoteCart(){
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId = user ? JSON.parse(user).id : null;
    if(data){
     let cartDataList:Product[]= JSON.parse(data);
   
     cartDataList.forEach((product:Product, index)=>{
      let cartData: cart = { id: 0, userId, date: '', products: [{ productId: product.id, quantity: 1 }], __v: 0 };
      //  delete cartData.id;
       setTimeout(() => {
         this.ds.addTocart(cartData).subscribe((result)=>{
           if(result){
             console.warn("data is stored in DB");
           }
         })
       }, 500);
       if(cartDataList.length===index+1){
         localStorage.removeItem('localCart')
       }
     })
    }
 
    setTimeout(() => {
     this.ds.getCartList(userId)
    }, 2000);
     
   }

  }

