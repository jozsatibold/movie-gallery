import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import MoviesActions from './movies.actions';
import { MovieService } from '@global/services';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      switchMap(({ page }) =>
        this.movieService.getMovies(page).pipe(
          map(
            ({
              results: movies,
              total_results: totalResults,
              total_pages: totalPages,
              page,
            }) =>
              MoviesActions.loadMoviesSuccess({
                movies,
                totalResults,
                totalPages,
                page,
              })
          ),
          catchError(({ error }) => {
            return of(MoviesActions.loadMoviesFailure({ error: error }));
          })
        )
      )
    )
  );

  loadMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.selectMovie),
      switchMap(({ movieId }) => this.movieService.getMovie(movieId)),
      map(movie => {
        return MoviesActions.loadMovie({ movie });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}
}
