import { MovieItem } from '@global/models/movie-item.model';

export interface DiscoverMovies {
  page: number;
  results: Array<MovieItem>;
  total_pages: number;
  total_results: number;
}
