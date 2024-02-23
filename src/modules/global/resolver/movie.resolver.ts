import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { MoviesFacades } from '@global/facades';
import { Movie } from '@global/models';

export const movieResolver: ResolveFn<Movie | null> = (
  route: ActivatedRouteSnapshot
) => {
  const movieId = route.params['id'];
  const service = inject(MoviesFacades);
  if (movieId && !isNaN(+movieId)) {
    service.selectMovie(movieId);
  }
  return service.getSelectedMovie$;
};
