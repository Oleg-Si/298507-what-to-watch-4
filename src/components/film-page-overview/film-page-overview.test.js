import React from 'react';
import renderer from 'react-test-renderer';
import {mockFilmForTests} from '../../mock/films.js';
import FilmPageOverview from './film-page-overview.jsx';

it(`Проверяет снепшот компонента FilmPageOverview`, () => {
  const tree = renderer.create(
      <FilmPageOverview
        filmInfo={mockFilmForTests}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
