import ActionCreator from './action-creator';
import ActionType from './action-type';
import {mockFilmForTests} from './../../mock/films';
import {COUNT_MORE_FILMS} from '../../constants';

describe(`ActionCreator работает корректно`, () => {
  it(`genreFilterChange устанавливает переданный жанр`, () => {
    expect(ActionCreator.genreFilterChange(`Horror`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Horror`
    });
  });

  it(`showMoreFilms работает корректно`, () => {
    expect(ActionCreator.showMoreFilms(8)).toEqual({
      type: ActionType.SHOW_MORE_FILMS,
      payload: COUNT_MORE_FILMS + 8
    });
  });

  it(`filmsPageTabChange устанавливает переданный таб`, () => {
    expect(ActionCreator.filmsPageTabChange(`Details`)).toEqual({
      type: ActionType.CHANGE_TAB,
      payload: `Details`
    });
  });

  it(`selectsFilm записывает выбранный фильм`, () => {
    expect(ActionCreator.selectsFilm(mockFilmForTests)).toEqual({
      type: ActionType.SELECTS_FILM,
      payload: mockFilmForTests,
    });
  });
});
