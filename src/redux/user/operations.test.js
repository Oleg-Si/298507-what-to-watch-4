import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../api';
import ActionType from './action-type';
import Operation from './operations';
import {AuthorizationStatus, Tabs} from './../../constants';
import appActionType from './../app/action-type';
import {mockFilmForTests, mockFilmsForTests} from '../../mock/films';
import NameSpace from './../name-space';

const api = createAPI(() => {});

const correctResponse = {
  email: `mail`,
  // eslint-disable-next-line camelcase
  avatar_url: `/wtw/static/avatar/6.jpg`,
  statusCode: 200
};

const userData = {
  email: `mail`,
  avatar: `https://4.react.pages.academy/wtw/static/avatar/6.jpg`,
  statusCode: 200
};

const authData = {
  login: `mail`,
  password: `pass`
};

const mockReview = {
  id: 1,
  rating: 5,
  comment: `comment`
};

const badResponseStatus = 400;

it(`Operation должен сделать корректный get запрос /login, ответ 200`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const requiredAuthorization = Operation.requiredAuthorization();

  apiMock
    .onGet(`/login`)
    .reply(200, correctResponse);

  return requiredAuthorization(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.CORRECT_AUTHORIZATION,
        payload: userData
      });
    })
    .catch(() => {});
});

it(`Operation должен сделать корректный get запрос /login, ответ 400`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const requiredAuthorization = Operation.requiredAuthorization();

  apiMock
    .onGet(`/login`)
    .reply(400, badResponseStatus);

  return requiredAuthorization(dispatch, () => {}, api)
    .catch(() => {});
});

it(`Operation должен сделать корректный post запрос /login, ответ 200`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const login = Operation.login(authData);

  apiMock
    .onPost(`/login`)
    .reply(200, correctResponse);

  return login(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.CORRECT_AUTHORIZATION,
        payload: userData
      });
    });
});

it(`Operation должен сделать корректный post запрос /login, ответ 400`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const login = Operation.login(authData);

  apiMock
    .onPost(`/login`)
    .reply(400, badResponseStatus);

  return login(dispatch, () => {}, api)
    .catch(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.BAD_AUTHORIZATION,
        payload: badResponseStatus
      });
    });
});

it(`Operation должен сделать корректный post запрос /comments/1, ответ 200`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const createReview = Operation.createReview(mockReview);

  apiMock
    .onPost(`/comments/${mockReview.id}`)
    .reply(200, {});

  return createReview(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: appActionType.CHANGE_TAB,
        payload: Tabs.OVERVIEW
      });
    });
});

it(`Operation должен сделать корректный post запрос /comments/1, ответ 400`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const createReview = Operation.createReview(mockReview);

  apiMock
    .onPost(`/comments/${mockReview.id}`)
    .reply(400, badResponseStatus);

  return createReview(dispatch, () => {}, api)
    .catch(() => {});
});

it(`Operation должен сделать корректный post запрос /favorite/1, ответ 200`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const isFavorite = Operation.isFavorite(1, 0);

  const state = {
    [NameSpace.DATA]: {
      films: mockFilmsForTests,
      promoFilm: mockFilmForTests
    }
  };

  apiMock
    .onPost(`/favorite/1/0`)
    .reply(200, mockFilmsForTests);

  return isFavorite(dispatch, () => state, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: appActionType.CHANGE_PROMO_FILM_STATUS,
        payload: false
      });
    });
});

it(`Operation должен сделать корректный post запрос /favorite/2, ответ 200`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const isFavorite = Operation.isFavorite(2, 0);

  const state = {
    [NameSpace.DATA]: {
      films: mockFilmsForTests,
      promoFilm: mockFilmForTests
    }
  };

  apiMock
    .onPost(`/favorite/2/0`)
    .reply(200, mockFilmsForTests);

  return isFavorite(dispatch, () => state, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
});

it(`Operation должен сделать корректный post запрос /favorite/1, ответ 200`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const isFavorite = Operation.isFavorite(1, 0);

  apiMock
    .onPost(`/favorite/1/0`)
    .reply(400, badResponseStatus);

  return isFavorite(dispatch, () => {}, api)
    .catch(() => {});
});
