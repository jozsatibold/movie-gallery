import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { MovieItem } from '@global/models';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mg-menu-item',
  standalone: true,
  imports: [RouterModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent {
  item = input.required<MovieItem>();
  selected = input.required<boolean>();

  @Output() navigated: EventEmitter<void> = new EventEmitter();

  itemSelected() {
    console.log(this.item());
    this.navigated.emit();
  }
}
