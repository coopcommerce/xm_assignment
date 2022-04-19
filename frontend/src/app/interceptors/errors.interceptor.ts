import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorIntercept implements HttpInterceptor {

  constructor(
    private router: Router,
  ) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
        catchError((response: HttpErrorResponse) => {
          // Could catch some errors and preformat them
          return throwError(response);
        })
      );
  }

}
