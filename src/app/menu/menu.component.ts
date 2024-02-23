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

@Component({
  selector: 'mg-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuItemComponent, NgOptimizedImage],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  isOpen = input.required<boolean>();

  selected: number = -1;

  movies = new Array(100).fill(0).map((_, i) => ({
    id: i,
    title: `Title ${i}`,
  }));
  menuClasses = '';

  @Output() close = new EventEmitter();

  constructor() {
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
