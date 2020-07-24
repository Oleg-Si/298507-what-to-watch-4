import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withPlayer from './with-player';

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
