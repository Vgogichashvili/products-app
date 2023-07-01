import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


// custom inteceptor, where is token

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = localStorage.getItem('Access-Token');

    return next.handle(this.addAuthorization(request, accessToken!));
  }

  private addAuthorization(
    request: HttpRequest<any>,
    token: string
  ): HttpRequest<any> {
    if (token) {
      return request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
    return request;
  }
}
