import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { login, signUp } from "../model/user-type";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invaliduserAuth = new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(user: signUp) {
    this.http.post('https://fakestoreapi.com/users', user, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['/']);
        }

      })

  }
  userAuthReload() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/'])
    }
  }


  userLogin(data: login) {
    // this.http.get<any>('https://fakestoreapi.com/users').subscribe(response => {
    //   const users: signUp[] = response;

    //   if (Array.isArray(users)) {
    //     const matchingUser = users.find(user => user.email === data.email && user.password === data.password);

    //     if (matchingUser) {
    //       this.invaliduserAuth.emit(false);
    //       localStorage.setItem('user', JSON.stringify(matchingUser));
    //       this.router.navigate(['/']);
    //     } else {
    //       this.invaliduserAuth.emit(true);
    //       // alert('User is invalid, Please enter correct details.')
          
    //     }
    //   }
    // });

    // by using token concept 
    this.http.post('https://fakestoreapi.com/auth/login',data).subscribe((res:any)=>{
      if(res){
        alert('User login')
        localStorage.setItem('token', res.token)
        this.router.navigate(['/'])

      }
      else{
        alert('error')
      }
    })
  }



}

