import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Preloader from './preloader';

const preloaderMainStyle: {
  top: string;
  left: string;
  position: string;
} = {
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
