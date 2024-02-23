import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiscoverMovies, Movie } from '@global/models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`/movie/${id}`, {
      params: {
        'language': 'en-US',
      }
    });
  }

  getMovies(page: number): Observable<DiscoverMovies> {
    return this.http.get<DiscoverMovies>(`/discover/movie/`, {
      params: {
        'language': 'en-US',
        'include_adult': false,
        'include_video': false,
        page,
        'sort_by': 'popularity.desc'
      }
    });
  }
}
