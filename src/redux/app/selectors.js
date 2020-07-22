import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.APP;

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};

export const getActiveTab = (state) => {
  return state[NAME_SPACE].activeTab;
};

export const getCountFilmsForRender = (state) => {
  return state[NAME_SPACE].countFilmsForRender;
};

export const getPromoFilmStatus = (state) => {
  return state[NAME_SPACE].promoFilmIsFavorite;
};
