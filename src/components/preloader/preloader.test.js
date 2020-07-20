import React from 'react';
import renderer from 'react-test-renderer';
import Preloader from './preloader.jsx';


it(`Проверяет снепшот компонента Preloader`, () => {
  const tree = renderer.create(
      <Preloader />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
