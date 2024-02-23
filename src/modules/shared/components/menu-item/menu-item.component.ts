import { ChangeDetectionStrategy, Component, EventEmitter, input, Output } from '@angular/core';
import { MovieItemModel } from '@global/models';
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
  item = input.required<MovieItemModel>();
  selected = input.required<boolean>();

  @Output() navigated: EventEmitter<void> = new EventEmitter();

  itemSelected() {
    this.navigated.emit();
  }
}
