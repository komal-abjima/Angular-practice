import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserAuthComponent } from "./user-auth/user-auth.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { AboutComponent } from "./about/about.component";
import { CartPageComponent } from "./cart-page/cart-page.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGuard } from "./auth-guard.service";

const routes: Routes = [
    {
      component: HomeComponent,
      path: 'home',
    },
   
    {
      component:UserAuthComponent,
      path:'user-auth'
    },
    {
      component:ContactusComponent,
      path:'contactus'
    },
    {
      component: AboutComponent,
      path:'aboutus'
    },
    {
      component: CartPageComponent,
      path:'cart'
    },
    {
      component: CheckoutComponent,
      path:'checkout',
      canActivate: [AuthGuard]
    },
    {
      path:'',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}