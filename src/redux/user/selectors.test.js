import NameSpace from './../name-space';
import {getAuthorizationStatusCode, getIsAuthorizationChecked} from './selectors';

const state = {
  [NameSpace.USER]: {
    isAuthorizationChecked: true,
    authorizationStatusCode: 200
  }
};

describe(`Selectors работают корректно`, () => {
  it(`getAuthorizationStatusCode возвращает корректное значение`, () => {
    expect(getAuthorizationStatusCode(state)).toBe(200);
  });

  it(`getIsAuthorizationChecked возвращает корректное значение`, () => {
    expect(getIsAuthorizationChecked(state)).toBe(true);
  });
});
