import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/User.model';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]], 
    password:['', Validators.required],
    username: ['']
    // name: this.fb.group({ 
    //   firstname: [''],
    //   lastname: ['']
    // }),
    // address: this.fb.group({
    //   city: [''],
    //   street: [''],
    //   number: [''],
    //   zipcode: [''],
    //   geolocation: this.fb.group({
    //     lat:[''],
    //     long:['']
    //   }),
    // }),
    // phone: ['']

  });

  constructor(private fb: FormBuilder, private userService: UserService) { };

  ngOnInit(): void {
    this.userService.userAuthReload();
  }

  signup(data: Partial<User>) {
    console.log(data);
    const user: Partial<User> = {
      email: data.email || '',
      password: data.password || '',
      username: data.username || '',
      phone: data.phone,
      name: {
        firstname: data.name?.firstname || '',
        lastname: data.name?.lastname || '',
      },
      address: {
        city: data.address?.city || '',
        street: data.address?.street || '',
        number: data.address?.number || 0,
        zipcode: data.address?.zipcode || '',
        geolocation: {
          lat: data.address?.geolocation?.lat || '',
          long: data.address?.geolocation?.long || '',
        },
      },
    };
    this.userService.UserSignUp(user);
  }

}
