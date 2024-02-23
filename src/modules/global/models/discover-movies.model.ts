import { Movie } from '@global/models/movie.model';

export interface DiscoverMovies {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}
