import React from 'react';
import renderer from 'react-test-renderer';
import withPlayer from './with-player.jsx';

const Component = () => {
  return (
    <div>
      <p>Component</p>
    </div>
  );
};

const WrappedComponent = withPlayer(Component);

it(`Проверяет снепшот хока withPlayer`, () => {
  const tree = renderer.create(
      <WrappedComponent
        isMuted={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
