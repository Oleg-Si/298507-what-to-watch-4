import ActionCreator from './action-creator';
import ActionType from './action-type';
import films, {mockFilmForTests, mockReviews} from './../../mock/films';

describe(`ActionCreator работает корректно`, () => {
  it(`filterFilmsByGenre возвращает отсортированные фильмы`, () => {
    expect(ActionCreator.filterFilmsByGenre(films)).toEqual({
      type: ActionType.FILTER_FILMS_BY_GENRE,
      payload: films
    });
  });

  it(`loadFilms возвращает загруженные фильмы`, () => {
    expect(ActionCreator.loadFilms(films)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: films
    });
  });

  it(`loadPromoFilm возвращает загруженный фильм`, () => {
    expect(ActionCreator.loadPromoFilm(mockFilmForTests)).toEqual({
      type: ActionType.LOAD_PROMO_FILM,
      payload: mockFilmForTests
    });
  });

  it(`addFilmComments возвращает загруженные комментарии`, () => {
    expect(ActionCreator.addFilmComments(mockReviews)).toEqual({
      type: ActionType.ADD_FILM_COMMENTS,
      payload: mockReviews
    });
  });

  it(`loadFavoriteFilms возвращает загруженные фильмы`, () => {
    expect(ActionCreator.loadFavoriteFilms(films)).toEqual({
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films
    });
  });

  it(`updateFilms возвращает фильмы`, () => {
    expect(ActionCreator.updateFilms(films)).toEqual({
      type: ActionType.UPDATE_FILMS,
      payload: films
    });
  });
});
