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

  addReview: (review) => ({
    type: ActionType.ADD_REVIEW,
    payload: review
  })
};

export default ActionCreator;
