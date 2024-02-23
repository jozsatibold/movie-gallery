import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { MoviesEffects, moviesReducer } from '@global/store';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { TokenInterceptor, UrlInterceptor } from '@global/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(
      withInterceptors([UrlInterceptor, TokenInterceptor])
    ),
    provideStore({
      movies: moviesReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: true,
    }),
    provideEffects([MoviesEffects]),
  ],
};
