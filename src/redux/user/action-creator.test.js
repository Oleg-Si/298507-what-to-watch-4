import ActionCreator from './action-creator';
import ActionType from './action-type';
import {AuthorizationStatus} from './../../constants';
import {mockReviews} from '../../mock/films';

const mockReview = mockReviews[0];

const correctResponse = {
  email: `mail`,
  avatar: `link`,
  statusCode: 200
};

const errResponce = 400;

describe(`ActionCreator работает корректно`, () => {
  it(`requiredAuthorization возвращает AuthorizationStatus.AUTH`, () => {
    expect(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    });
  });

  it(`requiredAuthorization возвращает AuthorizationStatus.NO_AUTH`, () => {
    expect(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    });
  });

  it(`badAuthorization возвращает корректный ответ`, () => {
    expect(ActionCreator.badAuthorization(errResponce)).toEqual({
      type: ActionType.BAD_AUTHORIZATION,
      payload: errResponce
    });
  });

  it(`correctAuthorization возвращает корректный ответ`, () => {
    expect(ActionCreator.correctAuthorization(correctResponse)).toEqual({
      type: ActionType.CORRECT_AUTHORIZATION,
      payload: correctResponse
    });
  });

  it(`createReview возвращает переданный отзыв`, () => {
    expect(ActionCreator.createReview(mockReview)).toEqual({
      type: ActionType.CREATE_REVIEW,
      payload: mockReview
    });
  });

  it(`sendReviewError работает корректно`, () => {
    expect(ActionCreator.sendReviewError(true)).toEqual({
      type: ActionType.SEND_REVIEW_ERROR,
      payload: true
    });
  });
});
