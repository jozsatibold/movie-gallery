import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import * as process from 'node:process';
import { environment } from '../../../environments/environment';

export const TokenInterceptor : HttpInterceptorFn = (req: HttpRequest<unknown>, next:
  HttpHandlerFn) => {
  const token = environment.apiKey;
  const isNotApiCall =
    req.url.match('^(((https|http)://)|(/assets/)).*$') !== null;

  if (!token || !isNotApiCall) {
    return next(req);
  }
  const modifiedReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });
  return next(modifiedReq);
};
