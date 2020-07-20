import {DEFAULT_GENRE, RENDERED_FILMS_COUNT, COUNT_MORE_FILMS, DEFAULT_TAB, Screens} from '../../constants';
import {mockFilmForTests, mockFilmsForTests} from '../../mock/films';
import ActionType from './action-type';
import reducer from './app';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  activeTab: DEFAULT_TAB,
  countFilmsForRender: RENDERED_FILMS_COUNT,
  selectedFilm: {}
};

describe(`Reducer работает корректно`, () => {
  it(`Cоздается корректный initialState`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer меняет activeGenre на переданный`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      countFilmsForRender: RENDERED_FILMS_COUNT,
      currentScreen: Screens.MAIN,
      selectedFilm: {}
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Dramas`
    })).toEqual({
      activeGenre: `Dramas`,
      activeTab: DEFAULT_TAB,
      countFilmsForRender: RENDERED_FILMS_COUNT,
      currentScreen: Screens.MAIN,
      selectedFilm: {}
    });
  });

  it(`Reducer при ошибочном ActionType возвращает начальный стейт`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      countFilmsForRender: RENDERED_FILMS_COUNT,
      currentScreen: Screens.MAIN,
      selectedFilm: {}
    }, {
      type: null,
      payload: mockFilmsForTests
    })).toEqual({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      countFilmsForRender: RENDERED_FILMS_COUNT,
      currentScreen: Screens.MAIN,
      selectedFilm: {}
    });
  });

  it(`Reducer возвращает правильное количество фильмов для отрисовки`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      countFilmsForRender: RENDERED_FILMS_COUNT,
      currentScreen: Screens.MAIN,
      selectedFilm: {}
    }, {
      type: ActionType.SHOW_MORE_FILMS,
      payload: RENDERED_FILMS_COUNT + COUNT_MORE_FILMS
    })).toEqual({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      countFilmsForRender: RENDERED_FILMS_COUNT + COUNT_MORE_FILMS,
      currentScreen: Screens.MAIN,
      selectedFilm: {}
    });
  });

  it(`Reducer меняет activeTab на переданный`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      countFilmsForRender: RENDERED_FILMS_COUNT,
      currentScreen: Screens.MAIN,
      selectedFilm: {}
    }, {
      type: ActionType.CHANGE_TAB,
      payload: `Details`
    })).toEqual({
      activeGenre: DEFAULT_GENRE,
      activeTab: `Details`,
      countFilmsForRender: RENDERED_FILMS_COUNT,
      currentScreen: Screens.MAIN,
      selectedFilm: {}
    });
  });

  it(`Reducer записывает в selectedFilm переданный фильм`, () => {
    expect(reducer({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      countFilmsForRender: RENDERED_FILMS_COUNT,
      currentScreen: Screens.MAIN,
      selectedFilm: {}
    }, {
      type: ActionType.SELECTS_FILM,
      payload: mockFilmForTests
    })).toEqual({
      activeGenre: DEFAULT_GENRE,
      activeTab: DEFAULT_TAB,
      countFilmsForRender: RENDERED_FILMS_COUNT,
      currentScreen: Screens.FILM_PAGE,
      selectedFilm: mockFilmForTests
    });
  });
});
