import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../api';
import ActionType from './action-type';
import Operation from './operations';
import {AuthorizationStatus, Screens} from './../../constants';
import appActionType from './../app/action-type';

const api = createAPI(() => {});

const correctResponse = {
  email: `mail`,
  // eslint-disable-next-line camelcase
  avatar_url: `/link`,
  statusCode: 200
};

const userData = {
  email: `mail`,
  avatar: `https://4.react.pages.academy/link`,
  statusCode: 200
};

const authData = {
  login: `mail`,
  password: `pass`
};

const badResponseStatus = 400;

it(`Operation должен сделать корректный get запрос /login`, () => {
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
    });
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
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.CORRECT_AUTHORIZATION,
        payload: userData
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: appActionType.SIGN_IN,
        payload: Screens.MAIN
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
