import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../Services/Auth.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const jwt = this.auth.getToken()
    return next.handle(request.clone({ setHeaders: { authorization: `Bearer ${jwt}`  }})).pipe(
      tap(event => {
        console.log(event);

        if (event instanceof HttpResponse) {
           
          console.log(event);
  
        }
      }, error => {
          //handle if error

      })
    )
  }
}
