import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { login, signUp } from "../model/user-type";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    invaliduserAuth = new EventEmitter<boolean>(false)

    constructor(private http: HttpClient, private router: Router){}

userSignUp(user:signUp){
    this.http.post('https://fakestoreapi.com/users',user,{observe:'response'})
    .subscribe((result)=>{
     if(result){
       localStorage.setItem('user',JSON.stringify(result.body));
       this.router.navigate(['/']);
     }
     
    })
     
   }
userAuthReload(){
    if(localStorage.getItem('user')){
        this.router.navigate(['/'])
    }
}

userLogin(data:login){
    // this.http.get<signUp[]>(`https://fakestoreapi.com/users?email=${data.email}&password=${data.password}`,
    
    this.http.get<signUp[]>(`https://fakestoreapi.com/users?id=${data.id}}`,
    {observe:'response'}
    ).subscribe((result)=>{
      if(result && result.body?.length){
        this.invaliduserAuth.emit(false);
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/']);
        
      }else{
       this.invaliduserAuth.emit(true)
      }
    })
  }

}
