import { CSP_NONCE, Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit, OnDestroy{
isLoggedin = true;
authform: FormGroup;
formData: any = {}
isLoading = false;
error: string = null;
@ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
private closeSub: Subscription;


constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver){}

ngOnInit(): void {
    this.authform = new FormGroup({
        'email': new FormControl('', [Validators.required, Validators.email]),
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
          this.showErrorAlert(errorMessage);
          this.isLoading = false;
        }
      );
  
      this.authform.reset();
    }

    private showErrorAlert(message: string){
      // const alertcomp = new AlertComponent();
      const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
      const hostViewContainerRef = this.alertHost.viewContainerRef;
      hostViewContainerRef.clear();

      const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

      componentRef.instance.message = message;
     this.closeSub = componentRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();

      })
    }

    ngOnDestroy(): void {
      if(this.closeSub){
        this.closeSub.unsubscribe();
      }
    }

    onHandleError(){
      this.error = null
    }
}