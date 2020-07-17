import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in';

it(`Проверяет снепшот компонента SignIn`, () => {
  const tree = renderer.create(
      <SignIn
        onSubmit={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
