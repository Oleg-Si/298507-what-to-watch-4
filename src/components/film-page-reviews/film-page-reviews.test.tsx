import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {mockReviews} from '../../mock/films';
import FilmPageReviews from './film-page-reviews';

it(`Проверяет снепшот компонента FilmPageReviews`, () => {
  const tree = renderer.create(
      <FilmPageReviews
        filmReviews={mockReviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
