import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';

export const UrlInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const newUrl =
    !req.url.startsWith('https://') && !req.url.startsWith('https://')
      ? `https://api.themoviedb.org/3${req.url}`
      : req.url;
  const modifiedReq = req.clone({
    url: newUrl,
  });
  return next(modifiedReq);
};
