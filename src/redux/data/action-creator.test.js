import ActionCreator from './action-creator';
import ActionType from './action-type';
import films from './../../mock/films';

describe(`ActionCreator работает корректно`, () => {
  it(`filterFilmsByGenre возвращает отсортированные фильмы`, () => {
    expect(ActionCreator.filterFilmsByGenre(films)).toEqual({
      type: ActionType.FILTER_FILMS_BY_GENRE,
      payload: films
    });
  });

  it(`filterFilmsByGenre возвращает загруженные фильмы`, () => {
    expect(ActionCreator.loadFilms(films)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: {
        films,
        promoFilm: films[0]
      }
    });
  });
});
