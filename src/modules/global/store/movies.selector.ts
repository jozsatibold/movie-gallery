import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from '@global/store';
import { Movie } from '@global/models';

const movieState = createFeatureSelector<MoviesState>('movies');

// Selector for entire selected movie object (if stored in the store):
const getSelectedMovie = createSelector(
  movieState,
  (state: MoviesState) => state.selectedMovie
);

const getMovies = createSelector(
  movieState,
  (state: MoviesState) => Object.values(state.entities) as Array<Movie>
)
const getPaginatorInfo = createSelector(
  movieState,
  ({ page, totalPages, totalResults }: MoviesState) => ({ page, totalPages, totalResults }),
)

export default {
  getSelectedMovie,
  getMovies,
  getPaginatorInfo
}
