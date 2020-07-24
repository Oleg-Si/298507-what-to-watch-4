import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {mockFilmForTests} from '../../mock/films';
import FilmPageDetalis from './film-page-details';

it(`Проверяет снепшот компонента FilmPageDetalis`, () => {
  const tree = renderer.create(
      <FilmPageDetalis
        filmInfo={mockFilmForTests}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
