import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { MoviesFacades } from '@global/facades';
import { Movie } from '@global/models';

export const movieResolver: ResolveFn<Movie | null> = (
  route: ActivatedRouteSnapshot
) => {
  const movieId = route.params['id'];

  const facade = inject(MoviesFacades);
  // If we have a numeric id in the param list
  if (movieId && !isNaN(+movieId)) {
    // remove the previously selected movie from the store and fetch the new selected
    facade.clearMovie();
    facade.selectMovie(movieId);
  }
  return null;
};
