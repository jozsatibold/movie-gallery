import { MenuComponent } from './menu.component';
import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import { MoviesFacades } from '@global/facades';
import { of } from 'rxjs';
import { generateMockMovieList } from '@global/static/generator';
import { Paginator } from '@global/models';
import { provideMockStore } from '@ngrx/store/testing';

const MockMoviesFacades: Partial<MoviesFacades> = {
  getMovies$: of(generateMockMovieList(10)),
  getMoviesPaginator$: of<Paginator>({
    page: 1,
    totalPages: 10,
    totalResults: 100,
  }),
  loadMovies(page: number) {
    return of(page);
  },
};

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [
        provideMockStore({}),
        { provide: MoviesFacades, useValue: MockMoviesFacades },
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set menu classes based on isOpen input', () => {
    fixture = TestBed.createComponent(MenuComponent);
    fixture.componentRef.setInput('isOpen', true);
    fixture.detectChanges();
    expect(fixture.componentInstance.menuClasses).toEqual(
      'left-0 md:left-[0px]'
    );

    fixture.componentRef.setInput('isOpen', false);
    fixture.detectChanges();
    expect(fixture.componentInstance.menuClasses).toEqual(
      'left-[-300px] md:left-[0px]'
    );
  });
});
