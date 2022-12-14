import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token:string="token"+" "+String(localStorage.getItem("token"));
     const req=request.clone({headers:request.headers.set("Authorization",token)});
    //const req=request.clone({setHeaders:{Authorization:token}});
    return next.handle(req);
  }
}
