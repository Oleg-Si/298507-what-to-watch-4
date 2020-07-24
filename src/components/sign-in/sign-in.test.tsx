import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {SignIn} from './sign-in';
import {Router} from 'react-router-dom';
import history from '../../history';
import {AuthorizationStatus} from '../../constants';

it(`Проверяет снепшот компонента SignIn`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <SignIn
          authorizationStatusCode={200}
          onSubmit={() => null}
          onMyListClick={() => null}
          authorizationStatus={AuthorizationStatus.AUTH}
          userAvatar={`https://4.react.pages.academy/wtw/static/avatar/2.jpg`}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
