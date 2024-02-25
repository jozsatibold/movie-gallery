import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import MoviesActions from '@global/store/movies.actions';
import MoviesSelector from '@global/store/movies.selector';
import { Observable } from 'rxjs';
import { Movie, MovieItem, Paginator } from '@global/models';

@Injectable({
  providedIn: 'root',
})
export class MoviesFacades {
  constructor(private store: Store) {}

  selectMovie(movieId: number) {
    this.store.dispatch(MoviesActions.selectMovie({ movieId }));
  }

  clearMovies() {
    this.store.dispatch(MoviesActions.clearMovies());
  }

  clearMovie() {
    this.store.dispatch(MoviesActions.clearMovie());
  }

  loadMovies(page: number) {
    this.store.dispatch(MoviesActions.loadMovies({ page }));
  }

  getMovies$: Observable<Array<MovieItem>> = this.store.select(
    MoviesSelector.getMovies
  );

  getMoviesPaginator$: Observable<Paginator> = this.store.select(
    MoviesSelector.getPaginatorInfo
  );

  getSelectedMovie$: Observable<Movie | null> = this.store.select(
    MoviesSelector.getSelectedMovie
  );

  isLoading$: Observable<boolean> = this.store.select(MoviesSelector.isLoading);
}
