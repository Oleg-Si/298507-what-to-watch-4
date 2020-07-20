import React from 'react';
import renderer from 'react-test-renderer';
import AppHeaderMovieCard from './app-header-movie-card.jsx';
import {Router} from 'react-router-dom';
import history from '../../history';
import {AuthorizationStatus} from './../../constants';


it(`Проверяет снепшот компонента AppHeaderMovieCard`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AppHeaderMovieCard
          className="otherClass"
          authorizationStatus={AuthorizationStatus.AUTH}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
