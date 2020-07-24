import NameSpace from './../name-space';
import {getAuthorizationStatusCode, getIsAuthorizationChecked, getSendReviewErrorStatus} from './selectors';

const state = {
  [NameSpace.USER]: {
    isAuthorizationChecked: true,
    authorizationStatusCode: 200,
    sendReviewError: false
  }
};

describe(`Selectors работают корректно`, () => {
  it(`getAuthorizationStatusCode возвращает корректное значение`, () => {
    expect(getAuthorizationStatusCode(state)).toBe(200);
  });

  it(`getIsAuthorizationChecked возвращает корректное значение`, () => {
    expect(getIsAuthorizationChecked(state)).toBe(true);
  });

  it(`getSendReviewErrorStatus возвращает корректное значение`, () => {
    expect(getSendReviewErrorStatus(state)).toBe(false);
  });
});
