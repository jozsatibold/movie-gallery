import { createReducer, on } from '@ngrx/store';
import MoviesActions from './movies.actions';
import { moviesAdapter, initialState } from './movies.entity';

export const moviesReducer = createReducer(
  initialState,

  on(
    MoviesActions.loadMoviesSuccess,
    (state, { movies, page, totalResults, totalPages }) =>
      moviesAdapter.upsertMany(movies, {
        ...state,
        totalResults,
        totalPages,
        page,
        loading: false,
      })
  ),

  on(MoviesActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(MoviesActions.loadMovies, state => ({
    ...state,
    loading: true,
  })),

  on(MoviesActions.clearMovies, state =>
    moviesAdapter.removeAll({
      ...state,
      totalResults: 0,
      error: null,
      loading: false,
    })
  ),

  on(MoviesActions.loadMovie, (state, { movie: selectedMovie }) => {
    // Determine what information to store based on your requirements
    return {
      ...state,
      selectedMovie,
    };
  }),
  on(MoviesActions.clearMovie, state => {
    return {
      ...state,
      selectedMovie: null,
    };
  })
);
