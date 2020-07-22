import { getFavoriteFilms, getFilmComments, getUpdatedFilms, getIsLoadedFilms, getIsLoadedFavoriteFilms, getIsLoadedPromoFilms, getFilteredFilmsByGenre, getCurrentFilm, getPromoFilmId } from './selectors';
import NameSpace from './../name-space';
import {mockFilmForTests, mockFilmsForTests, mockReviews} from '../../mock/films';

const state = {
  [NameSpace.DATA]: {
    films: mockFilmsForTests,
    isLoadedFilms: true,
    filteredFilmsByGenre: mockFilmsForTests,
    promoFilm: mockFilmForTests,
    isLoadedPromoFilms: true,
    currentFilmComments: mockReviews,
    favoriteFilms: mockFilmsForTests,
    isLoadedFavoriteFilms: true
  },
  [NameSpace.APP]: {
    activeGenre: `Horror`,
    activeTab: `Detalis`,
    promoFilmIsFavorite: null,
    countFilmsForRender: 8
  }
};

describe(`Selectors работают корректно`, () => {
  it(`getActiveTab возвращает корректное значение`, () => {
    expect(getFavoriteFilms(state)).toEqual(mockFilmsForTests);
  });

  it(`getFilmComments возвращает корректное значение`, () => {
    expect(getFilmComments(state)).toEqual(mockReviews);
  });

  it(`getIsLoadedFilms возвращает корректное значение`, () => {
    expect(getIsLoadedFilms(state)).toBe(true);
  });

  it(`getIsLoadedFavoriteFilms возвращает корректное значение`, () => {
    expect(getIsLoadedFavoriteFilms(state)).toBe(true);
  });

  it(`getIsLoadedPromoFilms возвращает корректное значение`, () => {
    expect(getIsLoadedPromoFilms(state)).toBe(true);
  });

  it(`getFilteredFilmsByGenre возвращает корректное значение`, () => {
    const response = mockFilmsForTests.filter((el) => el.genre === `Horror`);
    expect(getFilteredFilmsByGenre(state)).toEqual(response);
  });

  it(`getCurrentFilm возвращает корректное значение`, () => {
    const response = mockFilmsForTests.filter((el) => el.id === 10)[0];
    expect(getCurrentFilm(state, `10`)).toEqual(response);
  });

  it(`getUpdatedFilms возвращает корректное значение`, () => {
    const newFilms = mockFilmsForTests.slice();
    const index = mockFilmsForTests.findIndex((el) => el.id === 1);
    newFilms[index] = mockFilmForTests;

    expect(getUpdatedFilms(state, `1`, mockFilmForTests)).toEqual(newFilms);
  });

  it(`getPromoFilmId возвращает корректное значение`, () => {
    expect(getPromoFilmId(state)).toEqual(mockFilmForTests.id);
  });
});
