import {getActiveTab} from './selectors';
import NameSpace from './../name-space';

const state = {
  [NameSpace.APP]: {
    activeGenre: `Horror`,
    activeTab: `Detalis`,
    promoFilmIsFavorite: null,
    countFilmsForRender: 8
  }
};

describe(`Selectors работают корректно`, () => {
  it(`getActiveTab возвращает таб`, () => {
    expect(getActiveTab(state)).toBe(`Detalis`);
  });
});
