import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  retryDelay = 2000;
  retryMaxAttempts = 1;
  constructor(public router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(error => {
        // log error
        console.error(error);
        // handle error
        if (error.status === 401) {
          // auto logout if 401 response returned from api
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
