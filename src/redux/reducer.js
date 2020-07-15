import {combineReducers} from 'redux';
import data from './data/data';
import app from './app/app';
import NameSpace from './name-space';

const reducer = combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app
});

export default reducer;
