import * as React from 'react';
import * as renderer from 'react-test-renderer';
import AppHeader from './app-header';
import {AuthorizationStatus} from '../../constants';
import {Router} from 'react-router-dom';
import history from '../../history';


it(`Проверяет снепшот компонента AppHeader`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AppHeader
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          userAvatar={`https://4.react.pages.academy/wtw/static/avatar/2.jpg`}
          onMyListClick={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Проверяет снепшот компонента AppHeader`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AppHeader
          authorizationStatus={AuthorizationStatus.AUTH}
          userAvatar={`https://4.react.pages.academy/wtw/static/avatar/2.jpg`}
          onMyListClick={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
