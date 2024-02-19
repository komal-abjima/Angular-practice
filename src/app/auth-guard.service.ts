import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { UserService } from "./service/user.service";


@Injectable({
   providedIn: "root",
})
export class AuthGuard implements CanActivate {
   constructor(private userService: UserService, private router: Router) {}

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.userService.isLoggedin()) {
         return true;
      } else {
        alert('first please login yourself')
         this.router.navigate(["/user-auth"]);
         return false;
      }
   }
}
