import { MovieItem } from '@global/models';

export const generateMockMovieList = (length: number): Array<MovieItem> => {
  return new Array(length).fill(0).map((_, i) => ({
    id: i + 1,
    title: `Movie ${i + 1}`,
    original_title: `Original title ${i + 1}`,
    overview: `Overview overview ${i + 1}`,
    poster_path: `wKCKKur7LyGFaUHmNhvy7FhIjmC`,
    backdrop_path: `wKCKKur7LyGFaUHmNhvy7FhIjmC`,
    vote_average: Math.floor(Math.random() * 100),
    vote_count: Math.floor(Math.random() * 100000) + 100,
    release_date: '2022-01-01',
    original_language: 'en-US',
  }));
};
