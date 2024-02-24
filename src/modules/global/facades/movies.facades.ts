import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import MoviesActions from '@global/store/movies.actions';
import MoviesSelector from '@global/store/movies.selector';
import { Observable } from 'rxjs';
import { Movie } from '@global/models';

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
    this.store.dispatch(MoviesActions.clearMovie())
  }

  loadMovies(page: number) {
    this.store.dispatch(MoviesActions.loadMovies({ page }))
  }

  getMovies$: Observable<Array<Movie>> = this.store.select(MoviesSelector.getMovies);

  getSelectedMovie$: Observable<Movie | null> = this.store.select(MoviesSelector.getSelectedMovie);
}
