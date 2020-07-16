import ActionCreator from './action-creator';
import {createFilm} from '../../adapter';

const Operations = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        let formattedData;

        if (Array.isArray(response.data)) {
          formattedData = response.data.map((el) => createFilm(el));
        } else {
          formattedData = createFilm(response.data);
        }

        dispatch(ActionCreator.loadFilms(formattedData));
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const formattedData = createFilm(response.data);

        dispatch(ActionCreator.loadPromoFilm(formattedData));
      });
  },

  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.addFilmComments(response.data));
      });
  },
};

export default Operations;
