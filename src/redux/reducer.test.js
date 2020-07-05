import {DEFAULT_GENRE, RENDERED_FILMS_COUNT} from '../constants';
import films, {promoFilmMock, mockFilmsForTests} from '../mock/films';
import {ActionType} from './action-type';
import reducer from './reducer';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  films,
  countFilmsForRender: RENDERED_FILMS_COUNT,
  filteredFilmsByGenre: films,
  promoFilmMock
};

describe(`Reducer работает корректно`, () => {
  it(`Cоздается корректный initialState`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer меняет activeGenre на переданный`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      films,
      filteredFilmsByGenre: films,
      promoFilmMock
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Dramas`
    })).toEqual({
      activeGenre: `Dramas`,
      films,
      filteredFilmsByGenre: films,
      promoFilmMock
    });
  });

  it(`Reducer меняет filteredFilmsByGenre на отфильтрованный массив`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      films,
      filteredFilmsByGenre: films,
      promoFilmMock
    }, {
      type: ActionType.FILTER_FILMS_BY_GENRE,
      payload: mockFilmsForTests
    })).toEqual({
      activeGenre: DEFAULT_GENRE,
      films,
      filteredFilmsByGenre: mockFilmsForTests,
      promoFilmMock
    });
  });

  it(`Reducer при ошибочном ActionType возвращает начальный стейт`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      films,
      filteredFilmsByGenre: films,
      promoFilmMock
    }, {
      type: null,
      payload: mockFilmsForTests
    })).toEqual({
      activeGenre: DEFAULT_GENRE,
      films,
      filteredFilmsByGenre: films,
      promoFilmMock
    });
  });
});
