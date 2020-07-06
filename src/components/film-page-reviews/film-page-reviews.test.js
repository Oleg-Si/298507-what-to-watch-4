import React from 'react';
import renderer from 'react-test-renderer';
import {mockFilmForTests} from '../../mock/films.js';
import FilmPageReviews from './film-page-reviews.jsx';

it(`Проверяет снепшот компонента FilmPageReviews`, () => {
  const tree = renderer.create(
      <FilmPageReviews
        filmInfo={mockFilmForTests}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
