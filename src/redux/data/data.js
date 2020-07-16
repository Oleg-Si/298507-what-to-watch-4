import ActionType from './action-type';
import {extend} from './../../utils';

const initialState = {
  films: [],
  filteredFilmsByGenre: [],
  promoFilm: {},
  currentFilmComments: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_FILMS_BY_GENRE:
      return extend(state, {filteredFilmsByGenre: action.payload});

    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
        filteredFilmsByGenre: action.payload
      });

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {promoFilm: action.payload});

    case ActionType.ADD_FILM_COMMENTS:
      return extend(state, {currentFilmComments: action.payload});
  }

  return state;
};

export default reducer;
