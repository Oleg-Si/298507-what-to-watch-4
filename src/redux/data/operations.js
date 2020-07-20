import ActionCreator from './action-creator';
import {createFilm} from '../../adapter';

const formatData = (data) => {
  let formattedData;

  if (Array.isArray(data)) {
    formattedData = data.map((el) => createFilm(el));
  } else {
    formattedData = createFilm(data);
  }

  return formattedData;
};

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
        dispatch(ActionCreator.loadPromoFilm(createFilm(response.data)));
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
