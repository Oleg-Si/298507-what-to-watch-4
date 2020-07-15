import ActionCreator from './action-creator';
import {createFilm} from '../../adapter';

const Operations = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const formattedData = response.data.map((el) => createFilm(el));

        dispatch(ActionCreator.loadFilms(formattedData));
      });
  }
};

export default Operations;
