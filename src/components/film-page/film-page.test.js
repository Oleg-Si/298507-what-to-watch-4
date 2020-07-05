import React from 'react';
import renderer from 'react-test-renderer';
import {FilmPage} from './film-page.jsx';
import {mockFilmForTests} from '../../mock/films.js';

it(`Проверяет снепшот компонента FilmPage`, () => {
  const tree = renderer.create(
      <FilmPage
        activeFilm={mockFilmForTests}
        activeTab={`Overview`}
        onTabClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
