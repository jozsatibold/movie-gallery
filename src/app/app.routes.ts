import { Routes } from '@angular/router';
import { AppRoutes } from '@global/enums';

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
    loadComponent: () =>
      import('./detail/detail.component').then(
        ({ DetailComponent }) => DetailComponent
      ),
  },
];
