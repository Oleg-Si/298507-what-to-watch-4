import {ActionType} from './action-type';
import {DEFAULT_GENRE, COUNT_MORE_FILMS} from './../constants';
import films from './../mock/films';

export const ActionCreator = {
  genreFilterChange: (newGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: newGenre
  }),

  filterFilmsByGenre: (newGenre) => {
    let filteredFilms = null;

    if (newGenre === DEFAULT_GENRE) {
      filteredFilms = films;
    } else {
      filteredFilms = films.filter((el) => el.genre === newGenre);
    }

    return ({
      type: ActionType.FILTER_FILMS_BY_GENRE,
      payload: filteredFilms
    });
  },

  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: COUNT_MORE_FILMS
  }),

  filmsPageTabChange: (newTab) => ({
    type: ActionType.CHANGE_TAB,
    payload: newTab
  }),
};
