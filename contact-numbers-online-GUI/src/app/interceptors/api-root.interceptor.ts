import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiRootInterceptor implements HttpInterceptor {

  constructor() {}
  apiUrl="http://localhost:3000"
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request.clone({url:`${this.apiUrl}${request.url}`}));
  }
}
