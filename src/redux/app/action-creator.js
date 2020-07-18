import ActionType from './action-type';
import {COUNT_MORE_FILMS} from './../../constants';

const ActionCreator = {
  genreFilterChange: (newGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: newGenre
  }),

  showMoreFilms: (filmsCount) => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: filmsCount + COUNT_MORE_FILMS
  }),

  filmsPageTabChange: (newTab) => ({
    type: ActionType.CHANGE_TAB,
    payload: newTab
  }),

  selectsFilm: (film) => ({
    type: ActionType.SELECTS_FILM,
    payload: film
  }),

  changeScreen: (screen) => ({
    type: ActionType.CHANGE_SCREEN,
    payload: screen
  })
};

export default ActionCreator;
