import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './redux/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createAPI from './api';
import dataOperations from './redux/data/operations';
import userActionCreator from './redux/user/action-creator';
import {AuthorizationStatus} from './constants';
import userOperations from './redux/user/operations';

const onUnauthorized = () => {
  store.dispatch(userActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(userOperations.requiredAuthorization());
store.dispatch(dataOperations.loadPromoFilm());
store.dispatch(dataOperations.loadFilms());
store.dispatch(dataOperations.loadFavoriteFilms());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
