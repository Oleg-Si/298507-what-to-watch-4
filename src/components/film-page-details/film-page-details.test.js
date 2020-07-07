import React from 'react';
import renderer from 'react-test-renderer';
import {mockFilmForTests} from '../../mock/films.js';
import FilmPageDetalis from './film-page-details.jsx';

it(`Проверяет снепшот компонента FilmPageDetalis`, () => {
  const tree = renderer.create(
      <FilmPageDetalis
        filmInfo={mockFilmForTests}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
