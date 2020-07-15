import {ActionType} from './action-type';
import {COUNT_MORE_FILMS} from './../constants';

export const ActionCreator = {
  genreFilterChange: (newGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: newGenre
  }),

  filterFilmsByGenre: () => ({
    type: ActionType.FILTER_FILMS_BY_GENRE,
    payload: null
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

  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  })
};
