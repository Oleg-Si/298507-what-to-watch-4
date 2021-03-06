import ActionCreator from './action-creator';
import {createFilm} from '../../adapter';
import {formatData} from '../../utils';
import appActionCreator from './../app/action-creator';

const Operations = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(formatData(response.data)));
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const film = createFilm(response.data);

        dispatch(ActionCreator.loadPromoFilm(film));
        dispatch(appActionCreator.changePromoFilmStatus(film.isFavorite));
      });
  },

  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.addFilmComments(response.data));
      });
  },

  loadFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavoriteFilms(formatData(response.data)));
      });
  },
};

export default Operations;
