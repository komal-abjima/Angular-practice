import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    const newCloneRequest = req.clone({
      setHeaders:{
        Authrization: `Bearer ${token}`
      }
    })
    return next.handle(newCloneRequest);
  }
}