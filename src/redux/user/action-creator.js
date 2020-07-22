import ActionType from './action-type';

const ActionCreator = {
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),

  badAuthorization: (response) => ({
    type: ActionType.BAD_AUTHORIZATION,
    payload: response
  }),

  correctAuthorization: (response) => ({
    type: ActionType.CORRECT_AUTHORIZATION,
    payload: response
  }),

  createReview: (review) => ({
    type: ActionType.CREATE_REVIEW,
    payload: review
  }),

  sendReviewError: (status) => ({
    type: ActionType.SEND_REVIEW_ERROR,
    payload: status
  })
};

export default ActionCreator;
