import ActionCreator from './action-creator';
import {AuthorizationStatus, AppRoute} from '../../constants';
import appActionCreator from './../app/action-creator';
import history from './../../history';
import {Tabs} from './../../constants';

const formatAvatarUrl = (url) => {
  const splittedUrl = url.split(`/`);
  const newLinkArr = splittedUrl.slice(2, splittedUrl.length);
  const newUrl = newLinkArr.join(`/`);

  return newUrl;
};

const Operations = {
  requiredAuthorization: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        const avatarUrl = formatAvatarUrl(response.data.avatar_url);

        const userData = {
          email: response.data.email,
          avatar: `${response.config.baseURL}/${avatarUrl}`,
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
      const avatarUrl = formatAvatarUrl(response.data.avatar_url);

      const userData = {
        email: response.data.email,
        avatar: `${response.config.baseURL}/${avatarUrl}`,
        statusCode: response.status
      };

      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.correctAuthorization(userData));
      history.push(AppRoute.ROOT);
    })
    .catch((err) => {
      dispatch(ActionCreator.badAuthorization(err.response.status));
      throw err;
    });
  },

  createReview: (review) => (dispatch, getState, api) => {
    return api.post(`/comments/${review.id}`, {
      rating: review.rating,
      comment: review.comment
    })
    .then(() => {
      dispatch(appActionCreator.filmsPageTabChange(Tabs.OVERVIEW));
      history.push(`${AppRoute.FILM}/${review.id}`);
    })
    .catch((err) => {
      throw err;
    });
  }
};

export default Operations;
