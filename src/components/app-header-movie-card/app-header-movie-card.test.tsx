import * as React from 'react';
import * as renderer from 'react-test-renderer';
import AppHeaderMovieCard from './app-header-movie-card';
import {Router} from 'react-router-dom';
import history from '../../history';
import {AuthorizationStatus} from '../../constants';

it(`Проверяет снепшот компонента AppHeaderMovieCard`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AppHeaderMovieCard
          className="otherClass"
          userAvatar={`img/avatar.jpg`}
          authorizationStatus={AuthorizationStatus.AUTH}
          onMyListClick={() => null}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
