import {ActionCreator} from './action-creator';

const Operations = {
  loadFilms: () => (dispatch, getState, api) => {
    api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
      });
  }
};

export default Operations;
