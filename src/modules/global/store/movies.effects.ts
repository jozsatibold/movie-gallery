import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
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
          catchError(({error}) => {
            return of(MoviesActions.loadMoviesFailure({ error: error }));
          })
        )
      )
    )
  );

  // Add effect to handle `selectMovie` action based on your requirements

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}
}
