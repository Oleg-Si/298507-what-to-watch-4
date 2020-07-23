import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {FilmPage} from './film-page.js';
import {mockFilmsForTests, mockFilmForTests, mockReviews} from '../../mock/films.js';
import {AuthorizationStatus} from '../../constants';
import {Router} from 'react-router-dom';
import history from '../../history';

it(`Проверяет снепшот компонента FilmPage`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <FilmPage
          films={mockFilmsForTests}
          film={mockFilmForTests}
          filmId={1}
          activeTab={`Overview`}
          onTabClick={() => {}}
          onFavorite={() => {}}
          onFilmCardTitleClick={() => {}}
          onMyListClick={() => {}}
          onPlayClick={() => {}}
          authorizationStatus={AuthorizationStatus.AUTH}
          userAvatar={`img/avatar.jpg`}
          filmReviews={mockReviews}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});