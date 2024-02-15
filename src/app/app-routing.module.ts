import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserAuthComponent } from "./user-auth/user-auth.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { AboutComponent } from "./about/about.component";

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