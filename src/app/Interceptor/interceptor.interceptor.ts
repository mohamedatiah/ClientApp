import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { AuthService } from '../Services/Auth.service';
import { LoaderService } from '../Services/loader.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private auth:AuthService,private loadingService:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const jwt = this.auth.getToken()
    console.log(jwt);
    this.loadingService.setLoading(true);
    return next.handle(request.clone({ setHeaders: { authorization: `Bearer ${jwt}`  }})).pipe(
      finalize(() => {console.log("sss");
      
        
          this.loadingService.setLoading(false);
        
      })
    );
    
    
  }
}
