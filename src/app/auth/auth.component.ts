import { CSP_NONCE, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit{
isLoggedin = true;
authform: FormGroup;
formData: any = {}
isLoading = false;
error: string = null;
constructor(private authService: AuthService, private router: Router){}

ngOnInit(): void {
    this.authform = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
}


ontoggle(){
    this.isLoggedin = !this.isLoggedin;
}
onSubmit(){
    if (!this.authform.valid) {
        return;
      }
      const email = this.authform.value.email;
      const password = this.authform.value.password;

      let authObs: Observable<AuthResponseData>;
  
      this.isLoading = true;
      if (this.isLoggedin) {
      authObs = this.authService.login(email, password);
      } else {
       authObs = this.authService.signup(email, password);
          
      }

      authObs.subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/recipes'])
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
  
      this.authform.reset();
    }
}