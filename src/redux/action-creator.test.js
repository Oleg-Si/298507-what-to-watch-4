import {ActionCreator} from './action-creator';
import {ActionType} from './action-type';
import films from './../mock/films';

const filteredFilms = films.filter((el) => el.genre === `Horror`);

describe(`ActionCreator работает корректно`, () => {
  it(`genreFilterChange устанавливает переданный жанр`, () => {
    expect(ActionCreator.genreFilterChange(`Horror`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Horror`
    });
  });

  it(`filterFilmsByGenre сортирует фильмы по переданному жанру`, () => {
    expect(ActionCreator.filterFilmsByGenre(`Horror`)).toEqual({
      type: ActionType.FILTER_FILMS_BY_GENRE,
      payload: filteredFilms
    });
  });

  it(`filterFilmsByGenre правильно возвращает категорию "Все жанры"`, () => {
    expect(ActionCreator.filterFilmsByGenre(`All genres`)).toEqual({
      type: ActionType.FILTER_FILMS_BY_GENRE,
      payload: films
    });
  });

});
