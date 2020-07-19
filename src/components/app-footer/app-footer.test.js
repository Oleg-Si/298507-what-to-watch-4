import React from 'react';
import renderer from 'react-test-renderer';
import AppFooter from './app-footer.jsx';
import {BrowserRouter} from 'react-router-dom';

it(`Проверяет снепшот компонента AppFooter`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <AppFooter />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
