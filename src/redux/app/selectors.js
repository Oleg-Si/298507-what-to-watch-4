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

export const getCurrentScreen = (state) => {
  return state[NAME_SPACE].currentScreen;
};

export const getSelectedFilm = (state) => {
  return state[NAME_SPACE].selectedFilm;
};
