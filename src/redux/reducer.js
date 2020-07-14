import {DEFAULT_GENRE, RENDERED_FILMS_COUNT, DEFAULT_TAB, Screens} from '../constants';
import films, {promoFilmMock} from '../mock/films';
import {extend} from '../utils';
import {ActionType} from './action-type';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  activeTab: DEFAULT_TAB,
  films,
  countFilmsForRender: RENDERED_FILMS_COUNT,
  filteredFilmsByGenre: films,
  promoFilmMock,
  currentScreen: Screens.MAIN,
  selectedFilm: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.payload});

    case ActionType.FILTER_FILMS_BY_GENRE:
      return extend(state, {filteredFilmsByGenre: action.payload});

    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {countFilmsForRender: action.payload});

    case ActionType.CHANGE_TAB:
      return extend(state, {activeTab: action.payload});

    case ActionType.SELECTS_FILM:
      return extend(state, {
        currentScreen: Screens.FILM_PAGE,
        selectedFilm: action.payload
      });
  }

  return state;
};

export default reducer;
