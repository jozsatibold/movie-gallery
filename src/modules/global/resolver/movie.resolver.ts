import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { MoviesFacades } from '@global/facades';
import { Movie } from '@global/models';
import { filter } from 'rxjs';

export const movieResolver: ResolveFn<Movie | null> = (
  route: ActivatedRouteSnapshot
) => {
  const movieId = route.params['id'];
  const facade = inject(MoviesFacades);
  if (movieId && !isNaN(+movieId)) {
    facade.clearMovie();
    facade.selectMovie(movieId);
  }
  return null;
};
