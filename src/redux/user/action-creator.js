import ActionType from './action-type';

const ActionCreator = {
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  })
};

export default ActionCreator;
