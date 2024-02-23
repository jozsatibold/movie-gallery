import {
  Component,
  effect,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from '@shared/components';
import { MoviesFacades } from '@global/facades';

@Component({
  selector: 'mg-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuItemComponent, NgOptimizedImage],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  isOpen = input.required<boolean>();

  selected: number = -1;
  menuClasses: string = '';

  movies$ = this.moviesFacade.getMovies$;

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

  itemSelected(selected: number) {
    this.selected = selected;
  }

  closeMenu() {
    this.close.emit();
  }
}
