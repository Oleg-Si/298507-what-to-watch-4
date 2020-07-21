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

  changePromoFilmStatus: (status) => ({
    type: ActionType.CHANGE_PROMO_FILM_STATUS,
    payload: status
  })
};

export default ActionCreator;
