import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './redux/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createAPI from './api';
import dataOperations from './redux/data/operations';

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(dataOperations.loadFilms());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
