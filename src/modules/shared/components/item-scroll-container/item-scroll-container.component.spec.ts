import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemScrollContainerComponent } from './item-scroll-container.component';

describe('ItemScollContainerComponent', () => {
  let component: ItemScrollContainerComponent;
  let fixture: ComponentFixture<ItemScrollContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemScrollContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemScrollContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
