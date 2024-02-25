import { Component, effect, EventEmitter, input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemScrollContainerComponent } from '@shared/components';
import { MoviesFacades } from '@global/facades';
import { Observable } from 'rxjs';
import { Paginator } from '@global/models';

@Component({
  selector: 'mg-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    ItemScrollContainerComponent,
  ],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  isOpen = input<boolean>(false);

  menuClasses: string = '';

  movies$ = this.moviesFacade.getMovies$;
  paginator$: Observable<Paginator> = this.moviesFacade.getMoviesPaginator$;
  isLoading$: Observable<boolean> = this.moviesFacade.isLoading$;

  @Output() close = new EventEmitter();

  constructor(private moviesFacade: MoviesFacades) {
    moviesFacade.loadMovies(1);
    effect(() => {
      if (this.isOpen()) {
        this.menuClasses = 'left-0 md:left-[0px]';
      } else {
        this.menuClasses = 'left-[-300px] md:left-[0px]';
      }
    });
  }

  closeMenu() {
    this.close.emit();
  }

  loadNextPage(page: number) {
    this.moviesFacade.loadMovies(page);
  }
}
