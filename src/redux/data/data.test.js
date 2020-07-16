import {mockFilmsForTests, mockReviews} from '../../mock/films';
import ActionType from './action-type';
import reducer from './data';

const initialState = {
  films: [],
  filteredFilmsByGenre: [],
  promoFilm: {},
  currentFilmComments: []
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
      filteredFilmsByGenre: [],
      promoFilm: {}
    }, {
      type: null,
      payload: mockFilmsForTests
    })).toEqual({
      films: [],
      filteredFilmsByGenre: [],
      promoFilm: {}
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
});
