import {DEFAULT_GENRE} from './constants';
import films from './mock/films';
import {extend} from './utils';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  films
};

const ActionType = {
  CHANGE_GENRE: `genreFilterChange`
};

const ActionCreator = {
  genreFilterChange: (newGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: newGenre
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
