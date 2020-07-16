import ActionType from './action-type';
import {extend} from './../../utils';
import {AuthorizationStatus} from './../../constants';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userAvatar: ``,
  authorizationStatusCode: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {authorizationStatus: action.payload});

    case ActionType.BAD_AUTHORIZATION:
      return extend(state, {
        authorizationStatusCode: action.payload
      });

    case ActionType.CORRECT_AUTHORIZATION:
      return extend(state, {
        userAvatar: action.payload.avatar,
        authorizationStatusCode: action.payload.statusCode,
      });
  }

  return state;
};

export default reducer;