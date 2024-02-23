import { Component } from '@angular/core';
import { Movie } from '@global/models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '@shared/components';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mg-detail',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  movie$: Observable<Movie | null> = this.route.data.pipe(
    map(({ movie }) => movie)
  );

  constructor(private route: ActivatedRoute) {}
}
