import {mockFilmsForTests, mockReviews} from '../../mock/films';
import ActionType from './action-type';
import reducer from './data';

const initialState = {
  films: [],
  isLoadedFilms: false,
  filteredFilmsByGenre: [],
  promoFilm: {},
  isLoadedPromoFilms: false,
  currentFilmComments: [],
  favoriteFilms: [],
  isLoadedFavoriteFilms: false
};

describe(`Reducer работает корректно`, () => {
  it(`Cоздается корректный initialState`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer меняет filteredFilmsByGenre на отфильтрованный массив`, () => {
    expect(reducer({
      films: [],
      filteredFilmsByGenre: [],
      promoFilm: {}
    }, {
      type: ActionType.FILTER_FILMS_BY_GENRE,
      payload: mockFilmsForTests
    })).toEqual({
      films: [],
      filteredFilmsByGenre: mockFilmsForTests,
      promoFilm: {}
    });
  });

  it(`Reducer при ошибочном ActionType возвращает начальный стейт`, () => {
    expect(reducer({
      films: [],
      isLoadedFilms: false,
      filteredFilmsByGenre: [],
      promoFilm: {},
      isLoadedPromoFilms: false,
      currentFilmComments: [],
      favoriteFilms: [],
      isLoadedFavoriteFilms: false
    }, {
      type: null,
      payload: mockFilmsForTests
    })).toEqual({
      films: [],
      isLoadedFilms: false,
      filteredFilmsByGenre: [],
      promoFilm: {},
      isLoadedPromoFilms: false,
      currentFilmComments: [],
      favoriteFilms: [],
      isLoadedFavoriteFilms: false
    });
  });

  it(`Reducer меняет currentFilmComments на загруженные комментарии`, () => {
    expect(reducer({
      films: [],
      filteredFilmsByGenre: [],
      promoFilm: {},
      currentFilmComments: []
    }, {
      type: ActionType.ADD_FILM_COMMENTS,
      payload: mockReviews
    })).toEqual({
      films: [],
      filteredFilmsByGenre: [],
      promoFilm: {},
      currentFilmComments: mockReviews
    });
  });

  it(`Reducer загружает фильмы и записывает в стейт`, () => {
    expect(reducer({
      films: [],
      isLoadedFilms: false,
      filteredFilmsByGenre: [],
      promoFilm: {},
      isLoadedPromoFilms: false,
      currentFilmComments: [],
      favoriteFilms: [],
      isLoadedFavoriteFilms: false
    }, {
      type: ActionType.LOAD_FILMS,
      payload: mockFilmsForTests
    })).toEqual({
      films: mockFilmsForTests,
      isLoadedFilms: true,
      filteredFilmsByGenre: mockFilmsForTests,
      promoFilm: {},
      isLoadedPromoFilms: false,
      currentFilmComments: [],
      favoriteFilms: [],
      isLoadedFavoriteFilms: false
    });
  });

  it(`Reducer загружает избранные фильмы и записывает в стейт`, () => {
    expect(reducer({
      films: [],
      isLoadedFilms: false,
      filteredFilmsByGenre: [],
      promoFilm: {},
      isLoadedPromoFilms: false,
      currentFilmComments: [],
      favoriteFilms: [],
      isLoadedFavoriteFilms: false
    }, {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: mockFilmsForTests
    })).toEqual({
      films: [],
      isLoadedFilms: false,
      filteredFilmsByGenre: [],
      promoFilm: {},
      isLoadedPromoFilms: false,
      currentFilmComments: [],
      favoriteFilms: mockFilmsForTests,
      isLoadedFavoriteFilms: true
    });
  });
});
