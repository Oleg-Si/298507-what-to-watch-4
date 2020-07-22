import React from 'react';
import renderer from 'react-test-renderer';
import Preloader from './preloader.jsx';

const preloaderMainStyle = {
  top: `45vh`,
  left: `50vw`,
  position: `absolute`
};

it(`Проверяет снепшот компонента Preloader`, () => {
  const tree = renderer.create(
      <Preloader style={preloaderMainStyle} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
