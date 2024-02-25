import { moviesReducer } from './movies.reducer';
import moviesActions from './movies.actions';
import { generateMockMovieList } from '@global/static/generator';
import { initialState } from '@global/store/movies.entity';

const response = (page: number, count: number) => ({
  movies: generateMockMovieList(10),
  totalResults: count * 10,
  totalPages: 10,
  page,
});

describe('MovieReducer', () => {
  it('should add movie item list to the store and change the loading based on the actions', () => {
    const loadMoviesAction = moviesActions.loadMovies({ page: 2 });
    const setLoadedMovies = moviesActions.loadMoviesSuccess(response(2, 10));

    const state = moviesReducer(initialState, loadMoviesAction);
    expect(state.loading).toEqual(true);

    const result = moviesReducer(state, setLoadedMovies);
    expect(result.page).toEqual(2);
    expect(result.loading).toEqual(false);
  });
});
