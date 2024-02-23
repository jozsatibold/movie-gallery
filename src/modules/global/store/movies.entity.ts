import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Movie } from '@global/models';


export interface MoviesState extends EntityState<Movie> {
  selectedMovie: Movie | null;
  error: Error | null;
  totalResults: number;
  totalPages: number;
  page: number;
  loading: boolean;
}

export const moviesAdapter = createEntityAdapter<Movie>();

export const initialState: MoviesState = moviesAdapter.getInitialState({
  selectedMovie: null,
  error: null,
  totalResults: 0,
  totalPages: 0,
  page: 0,
  loading: false,
});
