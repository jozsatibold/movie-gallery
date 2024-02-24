import { Component } from '@angular/core';
import { Movie } from '@global/models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '@shared/components';
import { ImagePipe } from '@shared/pipes';
import { MoviesFacades } from '@global/facades';

@Component({
  selector: 'mg-detail',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, ImagePipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {

  movie$: Observable<Movie | null> = this.moviesFacades.getSelectedMovie$;

  constructor(private moviesFacades: MoviesFacades) {}
}
