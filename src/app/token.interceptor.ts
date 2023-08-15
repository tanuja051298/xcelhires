import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private authToken: string = '';

  constructor(private authservice: AuthService) {
    console.log("Inside interceptor const");
   }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Inside interceptor");
    this.authToken = this.authservice.getToken();
    console.log(this.authToken);
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authToken}`
      }
    });

    return next.handle(modifiedRequest);
  }
}
