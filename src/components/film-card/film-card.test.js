import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card.jsx';

const title = `Macbeth`;

it(`FilmCard should render film card`, () => {
  const tree = renderer.create(
      <FilmCard title={title} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
