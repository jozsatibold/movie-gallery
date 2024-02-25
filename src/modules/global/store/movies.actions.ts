import { createAction, props } from '@ngrx/store';
import { Movie, MovieItem } from '@global/models';

enum Actions {
  LoadMovies = '[Movies] LoadMovies',
  ClearMovies = '[Movies] ClearMovies',
  LoadMoviesSuccess = '[Movies] LoadMoviesSuccess',
  LoadMoviesFailure = '[Movies] LoadMoviesFailure',
  SelectMovie = '[Movies] SelectMovie',
  ClearMovie = '[Movies] ClearMovie',
  LoadMovie = '[Movies] LoadMovie',
}
// Load movies actions
const loadMovies = createAction(Actions.LoadMovies, props<{ page: number }>());

const loadMoviesSuccess = createAction(
  Actions.LoadMoviesSuccess,
  props<{
    movies: MovieItem[];
    totalResults: number;
    totalPages: number;
    page: number;
  }>()
);

const loadMoviesFailure = createAction(
  Actions.LoadMoviesFailure,
  props<{ error: any }>()
);

// Clear every item from the store
const clearMovies = createAction(Actions.ClearMovies);

// Select movie action
const selectMovie = createAction(
  Actions.SelectMovie,
  props<{ movieId: number }>()
);

const loadMovie = createAction(Actions.LoadMovie, props<{ movie: Movie }>());

// Clear selected movie from the store
const clearMovie = createAction(Actions.ClearMovie);

export default {
  loadMovies,
  loadMoviesSuccess,
  loadMoviesFailure,
  clearMovies,
  clearMovie,
  selectMovie,
  loadMovie,
};
