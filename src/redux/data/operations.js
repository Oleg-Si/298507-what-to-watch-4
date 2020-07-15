import ActionCreator from './action-creator';
import {createFilm} from '../../adapter';

const Operations = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        let formattedData;

        if (typeof response.data === Array) {
          formattedData = response.data.map((el) => createFilm(el));
        } else {
          formattedData = response.data;
        }

        dispatch(ActionCreator.loadFilms(formattedData));
      });
  }
};

export default Operations;
