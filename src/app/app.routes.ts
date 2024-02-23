import { Routes } from '@angular/router';
import { AppRoutes } from '@global/enums';
import { movieResolver } from '@global/resolver';

export const routes: Routes = [
  {
    path: AppRoutes.HOME,
    loadComponent: () =>
      import('./landing/landing.component').then(
        ({ LandingComponent }) => LandingComponent
      ),
  },
  {
    path: AppRoutes.MOVIE,
    resolve:  {
      movie: movieResolver,
    },
    loadComponent: () =>
      import('./detail/detail.component').then(
        ({ DetailComponent }) => DetailComponent
      ),
  },
];
