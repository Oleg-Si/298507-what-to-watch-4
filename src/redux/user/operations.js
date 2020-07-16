import ActionCreator from './action-creator';
import {AuthorizationStatus, Screens} from '../../constants';
import appActionCreator from './../app/action-creator';

const Operations = {
  requiredAuthorization: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        const userData = {
          email: response.data.email,
          avatar: `https://4.react.pages.academy${response.data.avatar_url}`,
          statusCode: response.status
        };

        dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.correctAuthorization(userData));
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
    .then((response) => {
      const userData = {
        email: response.data.email,
        avatar: `https://4.react.pages.academy${response.data.avatar_url}`,
        statusCode: response.status
      };

      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.correctAuthorization(userData));
      dispatch(appActionCreator.signIn(Screens.MAIN));
    })
    .catch((err) => {
      dispatch(ActionCreator.badAuthorization(err.response.status));
      throw err;
    });
  }
};

export default Operations;
