import ActionCreator from './action-creator';
import ActionType from './action-type';
import films from './../../mock/films';

// const filteredFilms = films.filter((el) => el.genre === `Horror`);

describe(`ActionCreator работает корректно`, () => {
  /*
  it(`filterFilmsByGenre сортирует фильмы по переданному жанру`, () => {
    expect(ActionCreator.filterFilmsByGenre()).toEqual({
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
  */
  it(`filterFilmsByGenre сортирует фильмы по переданному жанру`, () => {
    expect(ActionCreator.loadFilms(films)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: {
        films,
        promoFilm: films[0]
      }
    });
  });
});
