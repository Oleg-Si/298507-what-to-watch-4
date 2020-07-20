import React from 'react';
import renderer from 'react-test-renderer';
import AppHeaderMyList from './app-header-my-list.jsx';
import {Router} from 'react-router-dom';
import history from './../../history';
import {AuthorizationStatus} from './../../constants';


it(`Проверяет снепшот компонента AppHeaderMyList`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AppHeaderMyList
          className="otherClass"
          authorizationStatus={AuthorizationStatus.AUTH}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
