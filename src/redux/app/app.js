import {extend} from '../../utils';
import {DEFAULT_TAB, DEFAULT_GENRE, Screens, RENDERED_FILMS_COUNT} from './../../constants';
import ActionType from './action-type';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  activeTab: DEFAULT_TAB,
  countFilmsForRender: RENDERED_FILMS_COUNT,
  currentScreen: Screens.MAIN,
  selectedFilm: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.payload});

    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {countFilmsForRender: action.payload});

    case ActionType.CHANGE_TAB:
      return extend(state, {activeTab: action.payload});

    case ActionType.SELECTS_FILM:
      return extend(state, {
        currentScreen: Screens.FILM_PAGE,
        selectedFilm: action.payload
      });

    case ActionType.CHANGE_SCREEN:
      return extend(state, {currentScreen: action.payload});
  }

  return state;
};

export default reducer;
