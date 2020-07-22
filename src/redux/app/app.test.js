import {DEFAULT_GENRE, RENDERED_FILMS_COUNT, COUNT_MORE_FILMS, DEFAULT_TAB} from '../../constants';
import {mockFilmsForTests} from '../../mock/films';
import ActionType from './action-type';
import reducer from './app';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  activeTab: DEFAULT_TAB,
  promoFilmIsFavorite: null,
  countFilmsForRender: RENDERED_FILMS_COUNT
};

describe(`Reducer работает корректно`, () => {
  it(`Cоздается корректный initialState`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer меняет activeGenre на переданный`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      promoFilmIsFavorite: null,
      countFilmsForRender: RENDERED_FILMS_COUNT
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Dramas`
    })).toEqual({
      activeGenre: `Dramas`,
      activeTab: DEFAULT_TAB,
      promoFilmIsFavorite: null,
      countFilmsForRender: RENDERED_FILMS_COUNT
    });
  });

  it(`Reducer при ошибочном ActionType возвращает начальный стейт`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      promoFilmIsFavorite: null,
      countFilmsForRender: RENDERED_FILMS_COUNT
    }, {
      type: null,
      payload: mockFilmsForTests
    })).toEqual({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      promoFilmIsFavorite: null,
      countFilmsForRender: RENDERED_FILMS_COUNT
    });
  });

  it(`Reducer возвращает правильное количество фильмов для отрисовки`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      promoFilmIsFavorite: null,
      countFilmsForRender: RENDERED_FILMS_COUNT
    }, {
      type: ActionType.SHOW_MORE_FILMS,
      payload: RENDERED_FILMS_COUNT + COUNT_MORE_FILMS
    })).toEqual({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      promoFilmIsFavorite: null,
      countFilmsForRender: RENDERED_FILMS_COUNT + COUNT_MORE_FILMS,
    });
  });

  it(`Reducer меняет activeTab на переданный`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      promoFilmIsFavorite: null,
      countFilmsForRender: RENDERED_FILMS_COUNT
    }, {
      type: ActionType.CHANGE_TAB,
      payload: `Details`
    })).toEqual({
      activeTab: `Details`,
      activeGenre: DEFAULT_GENRE,
      promoFilmIsFavorite: null,
      countFilmsForRender: RENDERED_FILMS_COUNT
    });
  });

  it(`Reducer записывает в promoFilmIsFavorite переданный статус`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      promoFilmIsFavorite: null,
      countFilmsForRender: RENDERED_FILMS_COUNT
    }, {
      type: ActionType.CHANGE_PROMO_FILM_STATUS,
      payload: true
    })).toEqual({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      promoFilmIsFavorite: true,
      countFilmsForRender: RENDERED_FILMS_COUNT
    });
  });
});
