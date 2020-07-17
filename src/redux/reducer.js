import {combineReducers} from 'redux';
import data from './data/data';
import app from './app/app';
import user from './user/user';
import NameSpace from './name-space';

const reducer = combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app,
  [NameSpace.USER]: user
});

export default reducer;
