import {extend} from '../../utils';
import {DEFAULT_TAB, DEFAULT_GENRE, RENDERED_FILMS_COUNT} from './../../constants';
import ActionType from './action-type';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  activeTab: DEFAULT_TAB,
  promoFilmIsFavorite: null,
  countFilmsForRender: RENDERED_FILMS_COUNT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        countFilmsForRender: RENDERED_FILMS_COUNT
      });

    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {countFilmsForRender: action.payload});

    case ActionType.CHANGE_TAB:
      return extend(state, {activeTab: action.payload});

    case ActionType.CHANGE_PROMO_FILM_STATUS:
      return extend(state, {promoFilmIsFavorite: action.payload});
  }

  return state;
};

export default reducer;
