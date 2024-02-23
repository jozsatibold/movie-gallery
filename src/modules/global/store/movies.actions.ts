import { createAction, props } from '@ngrx/store';
import { Movie } from '@global/models';

enum Actions {
  LoadMovies = '[Movies] LoadMovies',
  ClearMovies = '[Movies] ClearMovies',
  LoadMoviesSuccess = '[Movies] LoadMoviesSuccess',
  LoadMoviesFailure = '[Movies] LoadMoviesFailure',
  SelectMovie = '[Movies] SelectMovie',
  ClearMovie = '[Movies] ClearMovie',
}
// Load movies actions
const loadMovies = createAction(Actions.LoadMovies, props<{ page: number }>());

const loadMoviesSuccess = createAction(
  Actions.LoadMoviesSuccess,
  props<{ movies: Movie[], totalResults: number, totalPages: number, page: number }>()
);

const loadMoviesFailure = createAction(
  Actions.LoadMoviesFailure,
  props<{ error: any }>()
);

// Clear every item from the store
const clearMovies = createAction(Actions.ClearMovies);

// Select movie action
const selectMovie = createAction(Actions.SelectMovie, props<{ movieId: number }>());

// Clear selected movie from the store
const clearMovie = createAction(Actions.ClearMovie);

export default {
  loadMovies,
  loadMoviesSuccess,
  loadMoviesFailure,
  clearMovies,
  clearMovie,
  selectMovie
}
