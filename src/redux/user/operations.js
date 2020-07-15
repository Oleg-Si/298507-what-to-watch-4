import ActionCreator from './action-creator';
import {AuthorizationStatus} from '../../constants';

const Operations = {
  requiredAuthorization: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
    .then(() => {
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
    });
  }
};

export default Operations;
