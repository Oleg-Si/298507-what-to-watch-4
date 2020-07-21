import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in';
import {Router} from 'react-router-dom';
import history from './../../history';

it(`Проверяет снепшот компонента SignIn`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <SignIn
          onSubmit={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
