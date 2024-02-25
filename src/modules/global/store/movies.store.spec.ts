import { TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { generateMockMovieList } from '@global/static/generator';
import { Store, StoreModule } from '@ngrx/store';
import { moviesReducer, MoviesState } from '@global/store';
import moviesActions from '@global/store/movies.actions';

describe('MovieStore', () => {
  let store: Store<{ movies: MoviesState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ movies: moviesReducer })],
    });
    store = TestBed.inject(Store);
  });

  it(`should provide 'Store' service`, () => {
    expect(() => store).toBeTruthy();
  });

  it(`should set the right menu item values and stop loading`, done => {
    store.dispatch(moviesActions.loadMovies({ page: 1 }));
    store
      .select(({ movies: { loading, ids } }) =>
        ({ loading, ids }))
      .pipe(first())
      .subscribe(({ loading, ids }) => {
        expect(loading).toEqual(true);
        expect(ids.length).toEqual(0);
      });
    store.dispatch(
      moviesActions.loadMoviesSuccess({
        page: 1,
        totalPages: 1,
        totalResults: 10,
        movies: generateMockMovieList(10),
      })
    );
    store
      .select(({ movies: { loading, ids } }) =>
        ({ loading, ids }))      .pipe(first())
      .subscribe(({ loading, ids }) => {
        expect(loading).toEqual(false);
        expect(ids.length).toEqual(10);
        done();
      });
  });
});
