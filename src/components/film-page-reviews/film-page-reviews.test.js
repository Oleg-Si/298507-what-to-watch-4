import React from 'react';
import renderer from 'react-test-renderer';
import {mockReviews} from '../../mock/films.js';
import FilmPageReviews from './film-page-reviews.jsx';

it(`Проверяет снепшот компонента FilmPageReviews`, () => {
  const tree = renderer.create(
      <FilmPageReviews
        filmReviews={mockReviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
