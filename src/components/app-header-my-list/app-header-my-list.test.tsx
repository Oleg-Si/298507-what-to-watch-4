import * as React from 'react';
import * as renderer from 'react-test-renderer';
import AppHeaderMyList from './app-header-my-list.js';
import {Router} from 'react-router-dom';
import history from '../../history';
import {AuthorizationStatus} from '../../constants';

it(`Проверяет снепшот компонента AppHeaderMyList`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AppHeaderMyList
          className="otherClass"
          userAvatar={`img/avatar.jpg`}
          authorizationStatus={AuthorizationStatus.AUTH}
          onMyListClick={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
