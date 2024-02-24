import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Movie, MovieItem } from '@global/models';


export interface MoviesState extends EntityState<MovieItem> {
  selectedMovie: Movie | null;
  error: Error | null;
  totalResults: number;
  totalPages: number;
  page: number;
  loading: boolean;
}

export const moviesAdapter = createEntityAdapter<MovieItem>();

export const initialState: MoviesState = moviesAdapter.getInitialState({
  selectedMovie: null,
  error: null,
  totalResults: 0,
  totalPages: 0,
  page: 0,
  loading: false,
});
