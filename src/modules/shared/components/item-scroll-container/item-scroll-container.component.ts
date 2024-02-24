import { Component, EventEmitter, input, Output, ViewChild } from '@angular/core';
import { MenuItemComponent, SpinnerComponent } from '@shared/components';
import { CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MovieItem, Paginator } from '@global/models';

@Component({
  selector: 'mg-item-scoll-container',
  standalone: true,
  imports: [
    MenuItemComponent,
    CdkVirtualScrollViewport,
    CdkVirtualForOf,
    CdkFixedSizeVirtualScroll,
    SpinnerComponent,
  ],
  templateUrl: './item-scroll-container.component.html',
})
export class ItemScrollContainerComponent {
  @ViewChild(CdkVirtualScrollViewport, { static: true }) viewport:
    | CdkVirtualScrollViewport
    | undefined;

  movies = input.required<Array<MovieItem> | null>();
  paginator = input.required<Paginator | null>();
  isLoading = input.required<boolean | null>();

  @Output() loadPage = new EventEmitter<number>();

  selected: number = -1;

  itemSelected(selected: number) {
    this.selected = selected;
  }

  cdkTrackBy(_: number, item: MovieItem) {
    return item.id;
  }

  onScroll() {
    if (!this.viewport) {
      return;
    }
    const scrollTop = this.viewport.measureScrollOffset('top');
    const scrollBottom = this.viewport.measureScrollOffset('bottom');
    const viewportHeight = this.viewport.measureViewportSize('vertical');

    // Calculate scroll position from the end:
    const scrollFromEnd = scrollBottom - viewportHeight;

    if (scrollFromEnd <= 3 * 62) {
      // Call your function when scroll is within 3 items of the last item
      this.onReachingEnd();
    }
  }

  onReachingEnd() {
    const paginator = this.paginator();
    if (!paginator || this.isLoading()) {
      return;
    }
    if (paginator.page < paginator.totalPages) {
      this.loadPage.emit(paginator.page + 1);
    }
  }
}
