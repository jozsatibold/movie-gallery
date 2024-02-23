import { createReducer, on } from '@ngrx/store';
import MoviesActions from './movies.actions';
import { moviesAdapter, initialState } from './movies.entity';

export const moviesReducer = createReducer(
  initialState,

  on(MoviesActions.loadMoviesSuccess, (state, { movies, page, totalResults, totalPages }) =>
    moviesAdapter.addMany(movies, {
      ...state,
      totalResults,
      totalPages,
      page,
      loading: false
    })
  ),

  on(MoviesActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(MoviesActions.loadMovies, (state) => ({
    ...state,
    loading: true
  })),

  on(MoviesActions.clearMovies, state =>
    moviesAdapter.removeAll({ ...state, totalResults: 0, error: null, loading: false })
  ),

  on(MoviesActions.selectMovie, (state, { movieId }) => {
    // Determine what information to store based on your requirements
    const selectedMovie = state.entities[movieId]; // Assuming you store movies by ID
    if (!selectedMovie) {
      return state;
    }
    const {
      poster_path,
      original_title,
      id,
      title,
      vote_average,
      vote_count,
      overview,
    } = selectedMovie;

    return {
      ...state,
      selectedMovie: {
        poster_path,
        original_title,
        id,
        title,
        vote_average,
        vote_count,
        overview,
      },
    };
  }),
  on(MoviesActions.clearMovie, state => {
    return {
      ...state,
      selectedMovie: null,
    };
  })
);
