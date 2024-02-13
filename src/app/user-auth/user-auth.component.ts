import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { login, signUp } from '../model/user-type';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent implements OnInit {
  showLogin:boolean = true;

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
    email: ['', [Validators.required, Validators.email]], 
    password:['', Validators.required]


  });

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { };

  ngOnInit(): void {
    this.userService.userAuthReload();
  }

  // signup(data: Partial<User>) {
  //   console.log(data);
  //   const user: Partial<User> = {
  //     email: data.email || '',
  //     password: data.password || '',
  //     username: data.username || '',
  //     phone: data.phone,
  //     name: {
  //       firstname: data.name?.firstname || '',
  //       lastname: data.name?.lastname || '',
  //     },
  //     address: {
  //       city: data.address?.city || '',
  //       street: data.address?.street || '',
  //       number: data.address?.number || 0,
  //       zipcode: data.address?.zipcode || '',
  //       geolocation: {
  //         lat: data.address?.geolocation?.lat || '',
  //         long: data.address?.geolocation?.long || '',
  //       },
  //     },
  //   };
  //   this.userService.UserSignUp(user);
  // }

  signUp(data: signUp) {
    this.userService.userSignUp(data);
  }


  login(data: login){
    // console.warn(data);
    this.userService.userLogin(data);
    this.userService.invaliduserAuth.subscribe((res)=>{
      console.warn('result', res)
    })
  }

  // login(email: string, password: string): void {
  //     this.userService.login(email, password).subscribe(
  //       (response: any) => {
  //   const userExists = response.some((user: any) => user.email === email && user.password === password);
          
  //         if (userExists) {
  //           localStorage.setItem('user', JSON.stringify({ email: email }));
  //           console.log('user matches')
  //           this.router.navigate(['/']);
          
  //         } else {
  //           this.router.navigate(['/user-auth']);
  //         }
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }

  openLogin(){
    this.showLogin = true
  }

  openRegister(){
    this.showLogin = false

  }

}
