import { MovieItem } from '@global/models/movie-item.model';

export interface Movie extends MovieItem {
  revenue: number;
  runtime: number;
  homepage: string;
  genres: Array<{ id: number; name: string }>;
}
