import { createFeatureSelector, createSelector } from '@ngrx/store';

import { moviesAdapter, MoviesState } from '@global/store';
import { Paginator } from '@global/models';

const movieState = createFeatureSelector<MoviesState>('movies');

// Selector for entire selected movie object (if stored in the store):
const getSelectedMovie = createSelector(
  movieState,
  (state: MoviesState) => state.selectedMovie
);

const getMovies = createSelector(
  movieState,
  (state: MoviesState) => moviesAdapter.getSelectors().selectAll(state)
)
const getPaginatorInfo = createSelector(
  movieState,
  ({ page, totalPages, totalResults }: MoviesState): Paginator => ({ page, totalPages, totalResults }),
)

const isLoading = createSelector(
  movieState,
  ({ loading }: MoviesState) => loading
)

export default {
  getSelectedMovie,
  getMovies,
  getPaginatorInfo,
  isLoading
}
