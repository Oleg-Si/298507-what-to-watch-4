import React from 'react';
import renderer from 'react-test-renderer';
import AppHeader from './app-header';
import {AuthorizationStatus} from './../../constants';


it(`Проверяет снепшот компонента AppHeader`, () => {
  const tree = renderer.create(
      <AppHeader
        authorizationStatus={AuthorizationStatus.NO_AUTH}
        userAvatar={`https://4.react.pages.academy/wtw/static/avatar/2.jpg`}
        onSignIn={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Проверяет снепшот компонента AppHeader`, () => {
  const tree = renderer.create(
      <AppHeader
        authorizationStatus={AuthorizationStatus.AUTH}
        userAvatar={`https://4.react.pages.academy/wtw/static/avatar/2.jpg`}
        onSignIn={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
