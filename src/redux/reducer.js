import {DEFAULT_GENRE, RENDERED_FILMS_COUNT} from '../constants';
import films, {promoFilmMock} from '../mock/films';
import {extend} from '../utils';
import {ActionType} from './action-type';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  films,
  countFilmsForRender: RENDERED_FILMS_COUNT,
  filteredFilmsByGenre: films,
  promoFilmMock
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.payload});

    case ActionType.FILTER_FILMS_BY_GENRE:
      return extend(state, {filteredFilmsByGenre: action.payload});
  }

  return state;
};

export default reducer;
