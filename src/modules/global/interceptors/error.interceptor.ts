import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { inject } from '@angular/core';
import { NotificationService } from '@shared/services';

// This interceptor caches the server errors
export const ErrorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) =>
  next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err) {
        const message = err.error.status_message || err.message;
        if (message) {
          inject(NotificationService).notify(message, 'error');
        }
      }
      throw err;
    })
  );
