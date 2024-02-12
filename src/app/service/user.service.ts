import { Injectable } from "@angular/core";
import { User } from "../model/User.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class UserService{

    constructor(private http: HttpClient, private router: Router){}
UserSignUp(user: Partial<User>){
    // console.log(data)
    this.http.post('https://fakestoreapi.com/users', user, {observe:'response'})
    .subscribe((res)=>{
        console.log(res)
        if(res){
            localStorage.setItem('user',JSON.stringify(res.body) );
            this.router.navigate(['/'])
        }
    })
}
userAuthReload(){
    if(localStorage.getItem('user')){
        this.router.navigate(['/'])
    }
}
}