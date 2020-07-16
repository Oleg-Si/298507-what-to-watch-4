import React from 'react';
import renderer from 'react-test-renderer';
import {FilmPage} from './film-page.jsx';
import {mockFilmForTests} from '../../mock/films.js';
import {mockFilmsForTests} from '../../mock/films.js';
import {AuthorizationStatus} from './../../constants';

it(`Проверяет снепшот компонента FilmPage`, () => {
  const tree = renderer.create(
      <FilmPage
        films={mockFilmsForTests}
        activeFilm={mockFilmForTests}
        activeTab={`Overview`}
        onTabClick={() => {}}
        onFilmCardTitleClick={() => {}}
        onSignInClick={() => {}}
        onAddReview={() => {}}
        authorizationStatus={AuthorizationStatus.AUTH}
        userAvatar={`img/avatar.jpg`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
