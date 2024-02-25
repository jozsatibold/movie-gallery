import { Component } from '@angular/core';
import { MoviesFacades } from '@global/facades';
import { Observable } from 'rxjs';
import { MovieItem } from '@global/models';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { ImagePipe } from '@shared/pipes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mg-landing',
  standalone: true,
  imports: [AsyncPipe, ImagePipe, RouterLink],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  topMovies$: Observable<MovieItem[]> = this.movieFacade.getMovies$.pipe(
    map(movies => (movies || []).slice(0, 12))
  );

  constructor(private movieFacade: MoviesFacades) {}
}
