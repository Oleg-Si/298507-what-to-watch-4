import {mockFilmsForTests} from '../../mock/films';
import ActionType from './action-type';
import reducer from './user';
import {AuthorizationStatus} from './../../constants';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userAvatar: ``,
  authorizationStatusCode: null
};

const correctResponse = {
  email: `mail`,
  avatar: `link`,
  statusCode: 200
};

const badResponse = 400;

describe(`Reducer работает корректно`, () => {
  it(`Cоздается корректный initialState`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer при ошибочном ActionType возвращает начальный стейт`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userAvatar: ``,
      authorizationStatusCode: null
    }, {
      type: null,
      payload: mockFilmsForTests
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userAvatar: ``,
      authorizationStatusCode: null
    });
  });

  it(`Reducer меняет AuthorizationStatus на корректный`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userAvatar: ``,
      authorizationStatusCode: null
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      userAvatar: ``,
      authorizationStatusCode: null
    });
  });

  it(`Reducer меняет userAvatar и authorizationStatusCode на корректные`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userAvatar: ``,
      authorizationStatusCode: null
    }, {
      type: ActionType.CORRECT_AUTHORIZATION,
      payload: correctResponse
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userAvatar: correctResponse.avatar,
      authorizationStatusCode: correctResponse.statusCode
    });
  });

  it(`Reducer меняет authorizationStatusCode на корректный`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userAvatar: ``,
      authorizationStatusCode: null
    }, {
      type: ActionType.BAD_AUTHORIZATION,
      payload: badResponse
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userAvatar: ``,
      authorizationStatusCode: badResponse
    });
  });
});
