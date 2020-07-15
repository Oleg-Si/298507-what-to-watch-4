import ActionType from './action-type';
import {extend} from './../../utils';

const initialState = {
  films: [],
  filteredFilmsByGenre: [],
  promoFilm: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_FILMS_BY_GENRE:
      return extend(state, {filteredFilmsByGenre: action.payload});

    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload.films,
        filteredFilmsByGenre: action.payload.films,
        promoFilm: action.payload.promoFilm
      });
  }

  return state;
};

export default reducer;
