import React from 'react';
import renderer from 'react-test-renderer';
import AppFooter from './app-footer.jsx';
import {Router} from 'react-router-dom';
import history from './../../history';

it(`Проверяет снепшот компонента AppFooter`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AppFooter />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
