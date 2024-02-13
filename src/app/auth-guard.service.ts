import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./service/user.service";

@Injectable({
    providedIn:'root'
})
export class AuthGuard {
 
      constructor(private userService: UserService, private router: Router) { }
     
     
     
    }