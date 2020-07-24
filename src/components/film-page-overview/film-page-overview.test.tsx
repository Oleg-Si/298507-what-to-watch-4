import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {mockFilmForTests} from '../../mock/films';
import FilmPageOverview from './film-page-overview';

it(`Проверяет снепшот компонента FilmPageOverview`, () => {
  const tree = renderer.create(
      <FilmPageOverview
        filmInfo={mockFilmForTests}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
